import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
        <Head>
          <title>Home</title>
        </Head>
        <h2 className={styles.title}>Home page</h2>
        <p className={styles.text}>Esse cillum aliqua culpa dolor sint. Officia ex Lorem incididunt sint tempor reprehenderit excepteur pariatur. Ut anim aute quis Lorem magna sunt elit veniam reprehenderit proident mollit anim magna. Lorem ex excepteur incididunt sit commodo magna culpa magna. Proident ullamco sunt tempor aute nostrud tempor quis Lorem et amet. Qui irure do proident fugiat qui voluptate nulla proident veniam deserunt mollit officia.</p>
        <Link href='/users'>
          <a className={styles.btn}>Users</a>
        </Link>
    </>
  )
}
