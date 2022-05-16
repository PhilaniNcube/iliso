import type { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react'
import ServicesComponent from '../components/Services';
import ServicesGrid from '../components/ServicesGrid';

const Services: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Iliso Urban Planners | Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ServicesGrid />
      <ServicesComponent />
    </Fragment>
  )
}

export default Services
