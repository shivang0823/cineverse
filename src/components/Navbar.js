// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'; // Assuming you have some custom styles for the Navbar
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">
       <h1>CineVerse</h1> 
      </div>
      <div className="space-x-4">
        <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
        <Link to="/profile" className="text-gray-300 hover:text-white">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;