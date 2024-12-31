import React from "react";
import { useNavigate } from "react-router-dom"; // To handle redirection
import { useAuth } from "../context/AuthContext"; // Assuming this is where you handle authentication

import './Navbar.css'; // For styling

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth(); // Destructuring logout from auth context
  const navigate = useNavigate(); // Use navigate hook to redirect after logout

  const handleLogout = () => {
    logout(); // Call the logout function from context
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Pet Adoption</a>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/adopt">Adopt a Pet</a></li>
        <li><a href="/adopt-pet-form">Application Form</a></li>
        <li><a href="/about">About</a></li>
        
        {isAuthenticated ? (
          <>
            <li><button onClick={handleLogout} className="btn btn-secondary">Logout</button></li>
          </>
        ) : (
          <>
            <li><a href="/register">Register</a></li>
            <li><a href="/login">Login</a></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
