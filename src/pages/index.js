import Head from 'next/head'
import Card from '../components/Card'
import Title from '../components/Title'
import Grid from '../components/Grid'
import Footer from '../components/Footer'
import { Root, Main } from '../components/Containers'

const Home = () => (
  <Root>
    <Head>
      <title>Ocarina Heroes</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Main>
      <Title />

      <Grid>
        <Card
          href="https://hero-complex-97rw1xf7a.vercel.app/"
          header="Allow myself to introduce myself"
          body="Making sure the code editor works as expected"
        />
        <Card
          href="https://nextjs.org/docs"
          header="Documentation &rarr;"
          body="Find in-depth information about Next.js features and API."
        />
        <Card
          href="https://nextjs.org/learn"
          header="Learn &rarr;"
          body="Learn about Next.js in an interactive course with quizzes!"
        />
        <Card
          href="https://github.com/zeit/next.js/tree/master/examples"
          header="Examples &rarr;"
          body="Discover and deploy boilerplate example Next.js projects."
        />

        <Card
          href="https://zeit.co/new?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          header="Deploy &rarr;"
          body="Instantly deploy your Next.js site to a public URL with ZEIT Now."
        />
      </Grid>
    </Main>

    <Footer />
  </Root>
)

export default Home
