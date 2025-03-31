import React, { useState } from 'react';
import logo from '../img/logo_quernel_auto.png';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo Quernel Auto" className="navbar-logo" />
        <h1>Quernel Auto</h1>
      </div>
      
      <div className="nav-container">
        <button className="burger-menu" onClick={toggleMenu}>
          <span className={`burger-bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`burger-bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`burger-bar ${isOpen ? 'open' : ''}`}></span>
        </button>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/compte">Mon compte</a></li>
            <li><a href="/demandes">Mes demandes</a></li>
            <li><a href="/apropos">À propos</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;