
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css"

 function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">G2EMO</Link>
      </div>
      <ul className={showMenu ? 'menu active' : 'menu'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={showMenu ? 'line line1 active' : 'line line1'}></div>
        <div className={showMenu ? 'line line2 active' : 'line line2'}></div>
        <div className={showMenu ? 'line line3 active' : 'line line3'}></div>
      </div>
    </nav>
  );
};

export default Nav;
