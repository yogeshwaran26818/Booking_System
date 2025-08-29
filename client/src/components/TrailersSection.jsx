import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import ReactPlayer from 'react-player'

const TrailersSection = () => {
  // Start with the first trailer
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
      <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>
        Trailers
      </p>

      <div className='relative mt-6'>
        <ReactPlayer
          url={currentTrailer.videoUrl} // 👈 plays trailer from dummyTrailers
          playing={true}               // autoplay
          controls={true}              // show controls
          muted={true}                 // autoplay works better when muted
          className="mx-auto max-w-full"
          width="960px"
          height="540px"
        />
      </div>
    </div>
  )
}

export default TrailersSection
