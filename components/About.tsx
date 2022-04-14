import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link';

const About = () => {
  return (
      
    <div className="max-w-6xl mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="col-span-1 border-r-2 border-slate-800 flex flex-col justify-center"> 
            <h2 className="text-lg md:text-2xl lg:text-4xl font-mont-extrabold tracking-widest text-sky-700">About</h2>
            <h2 className="text-lg md:text-2xl lg:text-2xl font-mont-bold text-green-700 uppercase">The Company</h2>

            <p className="text-base">Our  <span className="font-mont-bold uppercase">Goals</span> are to:</p>
            <ul className="text-sm text-gray-800 pr-2">
            <li className="flex"><span>&#9658;</span> To provide professional services to the province of the Eastern Cape and  ultimately South Africa.</li>
            <li className="flex"><span>&#9658;</span> To identify, serve and satisfy needs of clients.</li>
            <li className="flex"><span>&#9658;</span> To empower local communities to utilise our land sustainably.
</li>

            </ul>
            <p className="text-base mt-3">Our  <span className="font-mont-bold uppercase">Values</span> </p>
            <ul className="text-sm text-gray-800 pr-2">
            <li className="flex"><span>&#9658;</span> Iliso Urban Planners strives to serve  with integrity.</li>
            

            </ul>

          </div>

          <div className="col-span-1 lg:col-span-2">
<p className="text-sm text-gray-600 pl-2 lg:pl-8">ILISO URBAN PLANNERS was established in January 2021 to provide professional urban planning and development facilitation services to the private and public sector property development community. We recognize that the environment in which we conduct our practice is characterised by uncertainty, complexity and excessive inequality. In order to successfully operate in this context, and provide our clients with the information that they require to make strategic decisions, we have established a core team of planners who take a holistic view to the development process and where necessary, partner with like-minded practices if a broader range of skills is required.</p>

<h3 className="mt-3 pl-2 lg:pl-8 font-extrabold">Our Mission</h3>
<p className="text-sm text-gray-600 pl-2 lg:pl-8">Iliso Urban Planners is a firm of Town Planners which is in business to identify, serve and satisfy the needs and expectations of its clients in both the public and private sectors in the composite fields of planning and development. Iliso Urban Planners employs a strategic and developmental approach for every planning action that the company is involved in, with a specific emphasis on conducting work in a socially and environmentally responsible manner. Through the innovative and creative use of its expertise, knowledge and technology, the company will continue to provide a service of the highest quality, thereby satisfying the varying needs of relevant stakeholders.
        </p>
        
        <p className="text-sm text-gray-600 pl-2 lg:pl-8 mt-4"><strong>Solomzi Gusha</strong> is the director of Iliso Urban Planners, he is a graduate of Cape Peninsula University of Technology.I was inspired  to study town planning because of the province I come from. Whilst the province is land-rich  it is poorly planned, it has aging infrastructure and land is not used sustainably. My passion grew for town and regional planning to change my province  and further educate the public to take care of the space around them. 
</p>

          </div>
    </div>
  )
}

export default About