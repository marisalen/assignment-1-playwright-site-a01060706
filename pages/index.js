import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='author' content='MDIA 2109'/>
        <meta property='og:title' content='Assignment #1 - Home Page'/>
        <meta property='og:description' content='BCIT Digital Design and Development Diploma'/>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.homeContent}>
        <Navbar />
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.leftside}>
            <h1>An investment in knowledge pays the best interest.</h1>

            <hr></hr>

            <p>
            Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.
            </p>

            <div className={styles.buttonContainer}>
                <a><button className={styles.button}>More About Us</button></a>
                <a><button className={styles.button}>Contact Us</button></a>
            </div>


            <a><span><img src='/icons/downwardArrow.png'/></span></a>
          </div>
          <div></div>
        </div>
     
      </main>  
      </div>

    </>
  )
}
