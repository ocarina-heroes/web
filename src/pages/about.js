import Head from 'next/head'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About Ocarina Heroes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to Ocarina Heroes!</h1>

        <p className="description">This is the about page.</p>
      </main>
    </div>
  )
}
