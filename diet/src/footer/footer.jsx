import React from 'react';
import './footer.css'; // We'll create this CSS file next
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="fitness-footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3>About FitLife</h3>
          <p>FitLife is a personalized diet and fitness recommendation platform that creates customized diet plans based on your age, weight, height, BMI, activity level, and health goals.</p>
          <div className="footer-social">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>How does FitLife create my diet plan?</h3>
          We use scientifically informed models that analyze your personal information (like BMI, age, activity level, and goals) to match you with the most suitable diet type — such as Balanced, Low-Carb, or Low-Sodium — and then generate a complete meal plan
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>FitLife currently supports three diet types:</h3>
          <ul className="contact-info">
            <li><i className="fas fa-map-marker-alt"></i> Balanced Diet (general health)</li>
            <li><i className="fas fa-phone"></i>Low-Carb Diet (weight loss)</li>
            <li><i className="fas fa-envelope"></i>Low-Sodium Diet (heart health)</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Is FitLife free to use?</h3>
          <p>Yes! FitLife is currently free for all users. Just enter your details and receive a personalized diet plan instantly.</p>
          <form className="newsletter-form">
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FitLife Fitness. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/sitemap">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;