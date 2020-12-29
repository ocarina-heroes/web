import { simplify } from 'wikibase-sdk'
import persons from './persons.json'
import { SPARQLQueryDispatcher } from './SPARQLQueryDispatcher'

const endpointUrl = 'https://query.wikidata.org/sparql'

const personsQueryFragment = persons.reduce((acc, { person, qNumber }) => `${acc} (wd:${qNumber})`, '').trim()
const sparqlQuery = `SELECT ?item ?itemLabel ?dateOfBirth ?dateOfDeath (GROUP_CONCAT(DISTINCT ?occupationLabel; SEPARATOR = "/") AS ?occupation)(SAMPLE(?image)as ?image) WHERE {
  ?item wdt:P31 wd:Q5.
  VALUES (?item) {${personsQueryFragment}}
  ?article schema:about ?item;
   schema:inLanguage "en";
    schema:isPartOf <https://en.wikipedia.org/>.
  OPTIONAL { ?item wdt:P569 ?dateOfBirth. }
  OPTIONAL { ?item wdt:P570 ?dateOfDeath. }
  OPTIONAL { ?item wdt:P18 ?image. }
  OPTIONAL { ?item wdt:P106 ?occupation. }
  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "en".
    ?occupation rdfs:label ?occupationLabel.
    ?item rdfs:label ?itemLabel.
  }
}
GROUP BY ?item ?itemLabel ?dateOfBirth ?dateOfDeath`

async function fetchHeroes() {
  const queryDispatcher = new SPARQLQueryDispatcher(endpointUrl)
  const results = await queryDispatcher.query(sparqlQuery)
  return simplify.sparqlResults(results)
}

export default fetchHeroes
