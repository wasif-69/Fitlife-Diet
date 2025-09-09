import React from 'react';
import './Health.css';
 import health from '../assets/health.png';

const HealthCareDiet = () => {
  return (
    <section className="healthcare-section">
      <div className="healthcare-text">
        <h2>Health Care Diet</h2>
        <p>
          Fuel your fitness journey with our expertly crafted diet plans. Whether you're aiming for fat loss,
          muscle gain, or general wellness, we offer balanced and sustainable meal strategies tailored to your goals.
        </p>
        <a href="/form" className="explore-btn">Explore Diet Plans</a>
      </div>

      <div className="healthcare-image">
        <img
          src={health}
          alt="Healthy food"
        />
      </div>
    </section>
  );
};

export default HealthCareDiet;
