import fetchHeroes from './fetcher'

test('fetches heroes', async () => {
  const heroes = await fetchHeroes()
  console.info(heroes)
  expect(heroes).toMatchSnapshot()
})
