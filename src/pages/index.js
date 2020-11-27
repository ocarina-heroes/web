import Head from 'next/head'
import Card from '../components/Card'

const Home = () => (
  <div className="container">
    <Head>
      <title>Ocarina Heroes</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">Welcome to Ocarina Heroes!</h1>

      <p className="description">
        Get started by editing <code>pages/index.js</code>
      </p>

      <div className="grid">
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
      </div>
    </main>

    <footer>
      <a
        href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
      </a>
    </footer>
  </div>
)

export default Home
