import React from 'react'
import { dummyShowsData } from '../assets/assets' 
import MovieCard from '../components/MovieCard'

const Movies = () => {
  return dummyShowsData.length>0? (
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]'>
      <h1 className='text-lg font-medium my-4'>Now Showing</h1>
      <div className='flex flex-wrap max-sm:justify-center gap-8'>
        {dummyShowsData.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />    
        ))}
      </div>
      </div>

  ):(
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh] flex flex-col items-center justify-center'>
      <h1 className='text-lg font-medium my-4'>No Movies Found</h1>

    </div>
  )
}

export default Movies