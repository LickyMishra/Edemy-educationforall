import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

function Hero() {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-900/50'>
      <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>Build the Future You Dream With <span className='text-blue-500'>Skills That Matter.</span>
      <img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0' /></h1> {/*position defined in tailwind*/}
        
        <p className='md:block hidden text-gray-800 max-w-2xl mx-auto'>Our platform offers expert-led courses, real-world projects, and flexible
           learning designed to match every student’s pace and passion.
          Whether you're upskilling for a job or exploring new interests, 
          we’re here to guide your journey every step of the way.</p>

          {/*For phone screen*/}
        <p className='md:hidden text-gray-800 max-w-sm mx-auto'>Learn from industry experts, anytime, anywhere.
            Gain skills that help you grow, personally and professionally.</p>
            <SearchBar/>
    </div>
  )
}

export default Hero
