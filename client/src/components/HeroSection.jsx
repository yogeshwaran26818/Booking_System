import React from 'react'
import { Calendar as CalendarIcon, Clock as ClockIcon } from 'lucide-react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'


const HeroSection = () => {
    const navigate=useNavigate();
  return (
    <div
      className='flex flex-col items-start justify-center gap-4 
                 px-6 md:px-16 lg:px-36 
                 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen'
    >
      <img src={assets.marvelLogo} alt="Hero" className='max-h-11 lg:h-11 mt-20' />
      
      <h1 className='text-5xl md:text-[70px] md:leading-[4.5rem] font-semibold max-w-[1100px]'>
        Guardians <br /> of the Galaxy
      </h1>
      
      <div className="flex items-center gap-4 text-gray-300">
        <span>Action | Adventure | Sci-fi</span>

        <div className="flex items-center gap-1">
          <CalendarIcon className='w-4.5 h-4.5' /> 2018
        </div>

        <div className="flex items-center gap-1">
          <ClockIcon className='w-4.5 h-4.5' /> 2h 8m
        </div>
      </div>
      <p className='max-w-md text-gray-300'> 
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <button onClick={()=>navigate("/movies")}className='flex items-center gap-1 px-6 py-3 text-sm bg-primary 
             hover:bg-primary-dull transition rounded-full 
             font-medium cursor-pointer'>
        Explore Movies
        <ArrowRight className='w-5 h-5'/>
      </button>
    </div>
  )
}

export default HeroSection
