import React,{useContext} from 'react';
import { FaDumbbell } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';
import { ValueContext } from '../ValueContext';

const Header = () => {
   const { value } = useContext(ValueContext);
  return (
    <header className="fitlife-header">
      <div className="logo-section">
        <FaDumbbell className="logo-icon" />
        <h1 className="site-title">FitLife</h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/form">Get Plan</Link>
        <Link to="/aboutus">About</Link>
        <Link to="/form">{value}</Link>
        <Link to="/form">
          <button className="start-button"></button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;