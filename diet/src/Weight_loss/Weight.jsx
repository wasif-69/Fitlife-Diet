import React from 'react';
import { Link } from 'react-router-dom';
import './weight.css';
import weightImage from '../assets/weight.png';
const WeightLossProgram = () => {
  return (
    <section className="weight-loss-section">
      <div className="weight-loss-content">
        <div className="text-area">
          <h2>Weight Loss Program</h2>
          <p>
            Burn fat, build muscle, and boost your confidence with our professionally designed weight loss program.
            Tailored workouts, personalized coaching, and meal plans to help you hit your goals.
          </p>
          <Link to="/form">
            <button className="learn-more-btn">Learn More</button>
          </Link>
        </div>
        <div className="image-area">
          <img
            src={weightImage}
            alt="Weight loss program"
          />
        </div>
      </div>
    </section>
  );
};

export default WeightLossProgram;
