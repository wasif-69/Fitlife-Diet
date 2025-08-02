import React from 'react';
import './fitness.css';
 import Body from '../assets/fitness.png';

const PerformanceFitnessDiet = () => {
  return (
    <section className="performance-section">
      <div className="performance-content">
        <div className="performance-text">
          <h2>Performance & Fitness Diet</h2>
          <p>
            Elevate your athletic performance with precision nutrition. Our fitness diet plans are designed to optimize
            energy levels, recovery, and muscle growth—tailored for high-performance athletes and fitness enthusiasts.
          </p>
          <a href="/form" className="view-btn">View Plans</a>
        </div>

        <div className="performance-image">
          <img
            src={Body}
            alt="Athlete meal"
          />
        </div>
      </div>
    </section>
  );
};

export default PerformanceFitnessDiet;
