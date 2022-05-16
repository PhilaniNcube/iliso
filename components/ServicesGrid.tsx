import React from 'react'

function ServicesGrid() {

  return (
    <div className='bg-gray-50 overflow-y-hidden mt-10'>
      <div className="mx-auto max-w-7xl py-12 md:px-2  px-4">
        <div role="contentinfo" className="flex items-center justify-center">
          <hr className="w-2.5 h-16 bg-green-500" />
          <h1  className=" focus:outline-none text-4xl font-bold text-green-500 pl-7">Services<span className="text-2xl font-normal text-black"> We Provide</span></h1>
        </div>
        <div  aria-label="group of cards" className="focus:outline-none items-center justify-center mt-16 lg:flex">
          <div  aria-label="card 1" className="focus:outline-none lg:w-1/3 h-full shadow-lg hover:shadow-xl cursor-pointer xl:mr-7 lg:mr-3 mr-0 mb-8 lg:mb-0">
            <div className="relative">
              <img  alt="development rights" role="img" loading="lazy" src="/images/drawing.jpg" className="focus:outline-none w-full h-full object-cover" />
              <div className="bg-white w-full">
                <p  className="focus:outline-none text-center leading-7 text-lg text-gray-900 py-8">Development Rights Acquisition</p>
              </div>
            </div>
          </div>
          <div  aria-label="car 2" className="focus:outline-none lg:w-1/3 h-full shadow-lg hover:shadow-xl cursor-pointer xl:mr-7 lg:mr-3 mr-0 mb-8 lg:mb-0">
            <div className="relative">
              <img  alt="land rezoning" role="img" loading="lazy" src="/images/earth.jpg" className="focus:outline-none  w-full h-full object-cover" />
              <div className="bg-white w-full">
                <p  className="focus:outline-none text-center leading-7 text-lg text-gray-900 py-8">Rezoning of Land</p>
              </div>
            </div>
          </div>
          <div  aria-label="card 3" className="focus:outline-none lg:w-1/3 h-full shadow-lg hover:shadow-xl cursor-pointer">
            <div className="relative">
              <img  role="img" alt="home" loading="lazy" src="/images/construction.jpg" className="focus:outline-none w-full h-full" />
              <div className="bg-white w-full object-cover">
                <p  className="focus:outline-none text-center leading-7 text-lg text-gray-900 py-8">Property Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ServicesGrid
