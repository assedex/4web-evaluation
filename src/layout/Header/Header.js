import React from 'react';
import './Header.css';

const Header =({subtitle}) => (
  
    <header className="Header">
      <h1 class="header__title">Contact</h1>
      <h2 class="header__subtitle">{subtitle}</h2>
    </header>
  
  );



export default Header;
