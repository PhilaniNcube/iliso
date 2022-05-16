import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react';
import About from '../components/About';
import Hero from '../components/Hero';


const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Iliso Urban Planners</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Hero />
      <About />
    </Fragment>


     
  )
}

export default Home
