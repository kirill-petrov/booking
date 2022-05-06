import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Booking.com</span>
        <div className="navItems">
          <button
            type="button"
            className="navButton"
          >
            Register
          </button>
          <button
            type="button"
            className="navButton"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
