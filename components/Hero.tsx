import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Hero = () => {
  return (
      <div>
    <div className="relative shadow-inner ">
          <div className="overflow-hidden width-[100vw] h-[70vh] z-[-1]">
            <Image
                alt="Hero"
                src="/images/hero.jpg"
                layout="fill"
                objectFit="cover"
                quality={80}
            />
          </div>
          <div className="absolute inset-0 w-full h-[60vh] flex justify-end">
              <div className="h-full w-full  lg:w-[60%] justify-center flex flex-col space-y-2">
            <h1 className="text-2xl place-self-start md:text-3xl lg:text-6xl text-sky-700 font-mont-extrabold tracking-wide">Planning</h1>

            <h2 className="text-lg md:text-xl place-self-start lg:text-3xl uppercase font-mont-bold text-green-700">Beyond The Future</h2>

            <Link href="/contact"><a className="text-base font-bold px-5 py-2 bg-sky-700 rounded w-[200px] text-center text-white">Learn More</a></Link>
              </div>

          </div>
    </div></div>
  )
}

export default Hero