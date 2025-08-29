import { ChartLine, CircleDollarSign, PlayCircle, Users, Star } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { dummyDashboardData } from '../../assets/assets';
import BlurCircle from '../../components/BlurCircle';

const Dashboard = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const dateFormat = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    activeShows: [],
    totalUser: 0,
  });

  const [loading, setLoading] = useState(true);

  const dashboardCards = [
    { title: "Total Bookings", value: dashboardData.totalBookings || "0", icon: ChartLine },
    { title: "Total Revenue", value: `${currency || '$'}${dashboardData.totalRevenue || "0"}`, icon: CircleDollarSign },
    { title: "Active Shows", value: dashboardData.activeShows.length || "0", icon: PlayCircle },
    { title: "Total Users", value: dashboardData.totalUser || "0", icon: Users },
  ];

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
    setLoading(false);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return !loading ? (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="relative flex flex-wrap gap-4 mt-6">
        <BlurCircle top="-100px" left="0" />
        <div className="flex flex-wrap gap-4 w-full">
          {dashboardCards.map((card, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-3 bg-primary/10 border border-primary/20 rounded-md max-w-50 w-full"
            >
              <div>
                <h1 className="text-sm">{card.title}</h1>
                <p className="text-xl font-medium mt-1">{card.value}</p>
              </div>
              <card.icon className="w-6 h-6" />
            </div>
          ))}
        </div>
      </div>
      <p className="mt-10 text-lg font-medium">Active Shows</p>
      <div className="relative flex flex-wrap gap-6 mt-4 max-w-5xl">
        <BlurCircle top="100px" left="-10%" />
        {dashboardData.activeShows.map((show) => (
          <div
            key={show._id}
            className="w-55 rounded-lg overflow-hidden h-full pb-3 bg-primary/10 border border-primary/20 
                 hover:-translate-y-1 transition duration-300"
          >
            <img
              src={show.movie.poster_path}
              alt=""
              className="h-60 w-full object-cover"
            />
            <p className="font-medium p-2 truncate">{show.movie.title}</p>

            <div className="flex items-center justify-between px-2">
              <p className="text-lg font-medium">
                {currency} {show.showPrice}
              </p>
              <p className="flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1">
                <Star className="w-4 h-4 text-primary fill-primary" />
                {show.movie.vote_average.toFixed(1)}
              </p>
            </div>

            <p className="px-2 pt-2 text-sm text-gray-500">
              {dateFormat(show.showDateTime)}
            </p>
          </div>
        ))}
      </div>

    </div>
  ) : (
    <div className="flex justify-center items-center h-screen">Loading...</div>
  );
};

export default Dashboard;
