import type { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react'
import ServicesComponent from '../components/Services';

const Services: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Iliso Urban Planners | Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ServicesComponent />
    </Fragment>
  )
}

export default Services
