import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

const Main = () => {
  return (
    <div className="home-hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Welcome to FitLife</h1>
          <p>Your personalized fitness and diet companion. Start your journey to a healthier you!</p>
          <Link to="/form">
            <button className="hero-button">Start Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
