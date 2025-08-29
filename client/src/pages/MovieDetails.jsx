import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { dummyShowsData, dummyDateTimeData } from '../assets/assets'
import DateSelect from '../components/DateSelect'

const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const foundMovie = dummyShowsData.find(m => m._id === id)
    setMovie(foundMovie)
  }, [id])


  if (!movie) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="relative">
        <img 
          src={movie.backdrop_path} 
          alt={movie.title}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          <img 
            src={movie.poster_path} 
            alt={movie.title}
            className="w-64 h-96 object-cover rounded-lg shadow-lg"
          />
          
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
            <p className="text-xl text-gray-300 mb-4">{movie.tagline}</p>
            
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-yellow-500 text-black px-2 py-1 rounded font-bold">
                ⭐ {movie.vote_average.toFixed(1)}
              </span>
              <span className="text-gray-300">{movie.vote_count} votes</span>
              <span className="text-gray-300">{movie.runtime} min</span>
              <span className="text-gray-300">{movie.release_date}</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genres.map(genre => (
                <span key={genre.id} className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                  {genre.name}
                </span>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold mb-2">Overview</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">{movie.overview}</p>
            
            <h3 className="text-xl font-semibold mb-4">Cast</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {movie.casts.slice(0, 12).map((cast, index) => (
                <div key={index} className="text-center">
                  <img 
                    src={cast.profile_path} 
                    alt={cast.name}
                    className="w-16 h-16 rounded-full object-cover mx-auto mb-2"
                  />
                  <p className="text-sm text-gray-300">{cast.name}</p>
                </div>
              ))}
            </div>
            <DateSelect dateTime={dummyDateTimeData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
