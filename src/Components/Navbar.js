// Navbar.js
import React, { useState } from 'react';
import {  FaUser, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { GiSpookyHouse } from "react-icons/gi";
import { Link } from 'react-router-dom';
import './Navbar.css';
import { SiGnuprivacyguard } from "react-icons/si";
import { MdOutlineLogin } from "react-icons/md";
import TemporaryDrawer from './sidebar';


const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    // Implement your logout logic here
    setIsLoggedIn(false);
  };

  return (
    <div className="navbar-container">
      <div className="logo">
        <Link to="/">
        <GiSpookyHouse/>Hotel Booking
        </Link>
      </div>
      <div className="nav-list">
        <div className='list'>
          <Link to="/hotels">
            <FaUser /> Hotels
          </Link>
        </div>
        <div className='list'>
          <Link to="/booking">
            <FaSignInAlt /> Book Now
          </Link>
        </div>
      </div>
      <div className="auth-buttons">
        {isLoggedIn ? (
          <>
            <span>Welcome, User!</span>
            <button onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/signup"><SiGnuprivacyguard />Signup</Link>
            <Link to="/login"><MdOutlineLogin/>Login</Link>
          </>
        )}
      </div>
      <TemporaryDrawer/>
    </div>
  );
};

export default Navbar;
