import React, { Fragment } from 'react'
import {PhoneIcon} from '@heroicons/react/outline'


const Hero = () => {
  return (
    <Fragment>
      <div className="w-full h-[85vh] bg-hero bg-center bg-blend-overlay bg-slate-900/80 bg-cover bg-no-repeat flex justify-center items-center">

        <div className="max-w-7xl mx-auto flex flex-col items-start justify-center px-8 lg:px-0 w-full h-full">
          <h1 className="text-2xl md:text-4xl lg:text-6xl text-green-400 font-extrabold">Iliso Urban <br /> Planners</h1>
          
          <p className="font-medium mt-6 text-lg md:text-2xl text-white">Planning beyond the future.</p>

        </div>

      </div>
      <div className="h-[10vh] bg-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
          <h2 className="text-white text-lg">Do you have a question?</h2>
          <div className="flex text-white space-x-6 items-center h-full">
            <span className="">

              <PhoneIcon className="h-10 w-10" />
            </span>
            <span className="text-2xl">072 742 0073</span>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Hero