import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Pizza Hut</title>
        <meta name="description" content="Best Pizza Shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Featured />

    </div>
  )
}
