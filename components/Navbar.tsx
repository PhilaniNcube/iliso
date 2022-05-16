import React, { Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { FaWhatsapp } from "react-icons/fa";
import { Menu, Transition } from '@headlessui/react';
import {  MenuAlt1Icon } from '@heroicons/react/outline';


const Navbar = () => {

    const router = useRouter()

    const path = router.asPath
    
    console.log(path)

  return (
      <Fragment>
      <div className="fixed inset-0 h-16 bg-slate-800/40 border-b border-slate-50/10 shadow-lg shadow-slate-600/30 backdrop-blur">
        <nav className="flex items-center max-w-7xl mx-auto justify-between px-6 lg:px-0">
          <img src="/images/logo-01.svg" alt="logo" className="h-16 object-cover py-2" />
          
          <nav className="hidden md:flex items-center ">
            <Link href="/">
              <a className="text-white text-base uppercase pr-6">Home</a>
            </Link>
            <Link href="/services">
              <a className="text-white text-base uppercase pr-6">Services</a>
            </Link>
            <Link href="/contact">
              <a className="text-white text-base uppercase">Contact</a>
            </Link>
          </nav>

           <div className="w-56 text-right md:hidden">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-xl font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Menu
            <MenuAlt1Icon
              className="ml-2 -mr-1 h-8 w-8 text-green-50 hover:text-green-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                        <button
                          onClick={() => router.push('/')}
                    className={`${
                      active ? 'bg-green-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                  
                    Home
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                        <button
                          onClick={() => router.push('/services')}
                    className={`${
                      active ? 'bg-green-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    
                    Services
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                        <button
                          onClick={() => router.push('/contact')}
                    className={`${
                      active ? 'bg-green-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                   
                    Contact
                  </button>
                )}
              </Menu.Item>
             
            </div>
            <div className="px-1 py-1">
            
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>

        </nav>
         </div>

    </Fragment>
  )
}

export default Navbar