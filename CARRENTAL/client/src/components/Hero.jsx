import React, { useState } from 'react';
import { assets, cityList } from '../assets/assets';

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add search logic here
    console.log({ pickupLocation, pickupDate, returnDate });
  };

  return (
    <div className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center px-4'>
      <h1 className='text-4xl md:text-5xl font-semibold'>Luxury Cars on Rent</h1>

      <form
        onSubmit={handleSubmit}
        className='flex flex-col md:flex-row items-start md:items-center justify-between 
        p-6 rounded-lg md:rounded-full w-full max-w-3xl 
        shadow-[0px_8px_20px_rgba(0,0,0,0.1)] gap-6 bg-white'
      >
        <div className='flex flex-col md:flex-row items-start md:items-center gap-6 w-full'>

          {/* Pickup Location */}
          <div className='flex flex-col items-start gap-2 w-full md:w-auto'>
            <label htmlFor="pickup-location" className='text-sm font-medium'>Pickup Location</label>
            <select
              id="pickup-location"
              required
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className='px-4 py-2 border border-gray-300 rounded-md w-full'
            >
              <option value="">Select Location</option>
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <p className='text-sm text-gray-500'>
              {pickupLocation || 'Please select location'}
            </p>
          </div>

          {/* Pickup Date */}
          <div className='flex flex-col items-start gap-2 w-full md:w-auto'>
            <label htmlFor="pickup-date" className='text-sm font-medium'>Pick-up Date</label>
            <input
              type="date"
              id="pickup-date"
              min={today}
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className='px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 w-full'
              required
            />
          </div>

          {/* Return Date */}
          <div className='flex flex-col items-start gap-2 w-full md:w-auto'>
            <label htmlFor="return-date" className='text-sm font-medium'>Return Date</label>
            <input
              type="date"
              id="return-date"
              min={pickupDate || today}
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className='px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 w-full'
              required
            />
          </div>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className='flex items-center justify-center gap-2 px-9 py-3 mt-2 md:mt-0 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer'
        >
          <img src={assets.search_icon} alt="search" className='w-5 h-5 brightness-300' />
          Search
        </button>
      </form>

      <img src={assets.main_car} alt="Main luxury car" className='max-h-72 object-contain' />
    </div>
  );
};

export default Hero;
