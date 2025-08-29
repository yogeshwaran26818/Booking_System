import React from 'react'
import Navbar from './components/Navbar'
import SeatLayout from './pages/SeatLayout'
import { Routes, Route, useLocation } from 'react-router-dom'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddShows from './pages/admin/Addshows'
import ListShows from './pages/admin/ListShows'
import ListBookings from './pages/admin/ListBookings'


const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/seat-layout/:id/:date" element={<SeatLayout />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/admin/*" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="add-shows" element={<AddShows />} />
          <Route path="list-shows" element={<ListShows />} />
          <Route path="list-bookings" element={<ListBookings />} />


        </Route>

      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App
