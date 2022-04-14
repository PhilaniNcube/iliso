import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Iliso Urban Planners | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" grid grid-cols-1 md:grid-cols-2">
        <img src="/images/contact.jpeg" alt='contact' className="w-full object-cover" />
        <div className="bg-sky-700 text-white p-6">
<h1 className="text-2xl font-mont-bold">Contact Us</h1>
          <form className="mt-8 w-4/6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg">Name</label>
            <input type="text" className="border-b-2 border-white bg-transparent"  name="name" id="name"/>
            </div>
            <div className="flex flex-col mt-8">
              <label htmlFor="contactNumber" className="text-lg">Contact Number</label>
            <input type="tel" className="border-b-2 border-white bg-transparent"  name="contactNumber" id="contactNumber"/>
            </div>
            <div className="flex flex-col mt-8">
              <label htmlFor="email" className="text-lg">Email Address</label>
            <input type="email" className="border-b-2 border-white bg-transparent"  name="email" id="email"/>
            </div>
            <div className="flex flex-col mt-8">
              <label htmlFor="message" className="text-lg">Message</label>
            <input type="message" className="border-b-2 border-white bg-transparent"  name="message" id="message"/>
            </div>
</form>
        </div>
        <div className="h-[500px] bg-green-700 text-white px-6 lg:px-16 py-12 flex flex-col justify-center">
          <div className="flex space-x-8 justify-between">
            
            <p className="font-mont-bold mb-6">Address</p> <p>33 Maninjwa Street, Northcrest, Mthatha, 5099</p>
         
          </div>
          
          <div className="flex space-x-8 justify-between">   <p className="font-mont-bold mb-6">Cell</p> <p>+27 72 742 0073
(Also available on Whatsapp)</p>
          </div>
          
          <div className="flex space-x-8 justify-between"> <p className="font-mont-bold mb-6">Cell</p> <p className="flex flex-col"><span>ilisoplanners01@gmail.com</span>
          <span>info@ilisourbanplanners.co.za</span>
          </p></div>

        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.5451025399425!2d28.778027514474598!3d-31.564096581355145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e5fda1026181cc1%3A0x1c22ce5078e788d9!2s33%20V.%20N.%20Maninjwa%20St%2C%20Northcrest%2C%20Mthatha%2C%205099!5e0!3m2!1sen!2sza!4v1649929473033!5m2!1sen!2sza" width="100%" height="100%"   loading="lazy" ></iframe>
  </div>

     
    </Fragment>
  )
}

export default Home