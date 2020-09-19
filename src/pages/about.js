import Head from 'next/head'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About Ocarina Heroes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to the begining</h1>

        <p className="description">It's...about...to go...Down!.</p>
      </main>
    </div>
  )
}
