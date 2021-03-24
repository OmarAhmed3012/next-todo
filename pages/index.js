import Head from 'next/head'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <main>
        <h1>hey</h1>
      </main>
    </div>
  )
}
