import React, { useState } from 'react';
import { assets, menuLinks } from '../assets/assets';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const isHomePage = location.pathname === '/';

  return (
    <div
      className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 
      text-grey-600 border-b border-borderColor relative transition-all 
      ${isHomePage ? 'bg-light' : 'bg-white'}`}
    >
      {/* Logo */}
      <Link to='/'>
        <img src={assets.logo} alt="Site Logo" className="h-8" />
      </Link>

      {/* Navigation Links */}
      <div
        className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 
        max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row 
        items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 
        transition-all duration-300 z-50 
        ${isHomePage ? 'bg-light' : 'bg-white'} 
        ${open ? 'max-sm:translate-x-0' : 'max-sm:translate-x-full'}`}
      >
        {menuLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            onClick={() => setOpen(false)} // closes mobile menu on link click
            className="text-sm hover:text-primary transition-colors"
          >
            {link.name}
          </Link>
        ))}

        {/* Search Input (visible only on large screens) */}
        <div className='hidden lg:flex items-center text-sm gap-2 border border-borderColor px-3 rounded-full max-w-56'>
          <input
            type="text"
            className='py-1.5 w-full bg-transparent outline-none placeholder-grey-500'
            placeholder='Search Products'
          />
          <img src={assets.search_icon} alt="Search Icon" />
        </div>

        {/* Auth Buttons */}
        <div className='flex max-sm:flex-col items-start sm:items-center gap-6'>
          <button
            onClick={() => navigate('/owner')}
            className='cursor-pointer text-sm'
          >
            Dashboard
          </button>
          <button
            onClick={() => setShowLogin(true)}
            className='cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg text-sm'
          >
            Login
          </button>
        </div>
      </div>

      {/* Hamburger Icon */}
      <button
        className='sm:hidden cursor-pointer z-50'
        aria-label="Toggle Menu"
        onClick={() => setOpen(!open)}
      >
        <img src={open ? assets.close_icon : assets.menu_icon} alt="Menu Icon" />
      </button>
    </div>
  );
};

export default Navbar;
