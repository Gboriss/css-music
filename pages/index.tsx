import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
    <Head>
      <title>css-music</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1>
      <span>css</span>
      <span>music</span>
    </h1>


    <div className={styles.instruments}>
      <Link href="/instrument?name=guitar">
          <button>ddd</button>
      </Link>
    </div>
  </div>
  )
}

export default Home
