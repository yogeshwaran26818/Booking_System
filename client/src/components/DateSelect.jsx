import React, { useState } from 'react'
import BlurCircle from './BlurCircle'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useNavigate, useParams } from 'react-router-dom'

const DateSelect = ({ dateTime = {}, id }) => {
  const [selectedDate, setSelectedDate] = useState(null)
  const navigate = useNavigate()
  const { id: paramId } = useParams()
  const movieId = id || paramId

  const handleBookNow = () => {
    if (!selectedDate) {
      alert('Please select a date first!')
      return
    }
    navigate(`/seat-layout/${movieId}/${selectedDate}`)
  }

  return (
    <div id='dateSelect' className='pt-30'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-10 relative p-8 bg-primary/10 border border-primary/20 rounded-lg'>
        
        {/* Blur Background Circles */}
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle top="100px" left="-100px" />

        <div>
          <p className='text-lg font-semibold'>Choose Date</p>
          <div className='flex items-center gap-6 text-sm mt-5'>
            
            {/* Left Chevron */}
            <ChevronLeftIcon width={28} />

            <span className='grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4'>
              {Object.keys(dateTime).map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded cursor-pointer transition ${
                    selectedDate === date 
                      ? 'bg-primary text-white' 
                      : 'hover:bg-primary/20'
                  }`}
                >
                  <span>{new Date(date).getDate()}</span>
                  <span>
                    {new Date(date).toLocaleDateString("en-US", {
                      month: "short"
                    })}
                  </span>
                </button>
              ))}
            </span>

            {/* Right Chevron */}
            <ChevronRightIcon width={28} />

          </div>
        </div>

        {/* Book Now Button */}
        <button 
          onClick={handleBookNow}
          className='bg-primary text-white px-8 py-2 mt-6 rounded hover:bg-primary/90 transition-all cursor-pointer'
        >
          Book Now
        </button>

      </div>
    </div>
  )
}

export default DateSelect;
