import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StarIcon } from '@heroicons/react/20/solid'


const MovieCard = ({ movie }) => {
    const navigate = useNavigate()

    return (
        <div className='flex flex-col justify-between p-3 bg-gray-800 rounded-2xl 
                    hover:-translate-y-1 transition duration-300 w-66'>

            <img
                onClick={() => {
                    navigate(`/movies/${movie.id}`);
                    scrollTo(0, 0);
                }}
                src={movie.backdrop_path}
                alt={movie.title}
                className='rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer'
            />

            <p className='font-semibold mt-2 truncate'>
                {movie.title}
            </p>

            <p className='text-sm text-gray-400 mt-2'>
                {new Date(movie.release_date).getFullYear()} •{" "}
                {movie.genres.slice(0, 2).map(genre => genre.name).join(" | ")} • ⭐ {movie.runtime}
            </p>

            <div className='flex items-center justify-between mt-4 pd-3'>
                <button
                    onClick={() => {
                        navigate(`/movies/${movie.id}`);
                        scrollTo(0, 0);
                    }}
                    className='px-4 py-2 text-xs bg-primary hover:bg-primary-dull 
               transition rounded-full font-medium cursor-pointer'
                >
                    Buy Tickets
                </button>

                <p className='flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1'>
                    <StarIcon className="w-4 h-4 text-primary fill-primary" />
                    {movie.vote_average.toFixed(1)}
                </p>
            </div>

        </div>
    )
}

export default MovieCard
