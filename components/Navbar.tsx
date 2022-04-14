import React, { Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { FaWhatsapp } from "react-icons/fa";


const Navbar = () => {

    const router = useRouter()

    const path = router.asPath
    
    console.log(path)

  return (
      <Fragment>
          <div className="max-w-6xl mx-auto py-2 flex items-center justify-between">
              <h3 className="flex flex-col text-4xl leading-7"><span className="font-bold text-sky-900 tracking-widest">iliso</span><span className="font-medium text-xs uppercase text-green-700">Urban Planners</span></h3>
              
              <nav className="hidden font-medium md:flex space-x-2 text-md">
                  <Link href="/"><a className={path === '/' ? `text-green-700` : ""}>Home</a></Link>
                  <Link href="/services"><a className={path === '/services' ? `text-green-700` : ""}>Services</a></Link>
                  <Link href="/contact"><a className={path === '/contact' ? `text-green-700` : ""}>Contact Us</a></Link>
              </nav>

              <button className="flex items-center"><span className="px-2 rounded-l-full bg-sky-800 font-bold text-white">Get in touch</span><FaWhatsapp className="bg-sky-800 text-white h-10 w-10 -ml-2 rounded-full text-xs p-1" /></button>

          </div>

    </Fragment>
  )
}

export default Navbar