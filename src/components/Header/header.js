import React from "react";
import hamburger from '../../assets/images/hamburger_icon.svg';
import { NavLink, useLocation } from 'react-router-dom';


function Header() {
    const location = useLocation();

    return (
        <header>
            <h1>HES-SO Vs - 64-31 - HTML/CSS/JavaScript</h1>
            <nav>
                <ul>
                <li className="hamburger">
                    <img src={hamburger} alt="Hamburger" />
                </li>
                <li className={location.pathname === '/' ? 'active' : ''}>
                    <NavLink exact to="/">Description</NavLink>
                </li>
                <li className={location.pathname === '/sketch' ? 'active' : ''}>
                    <NavLink to="/sketch">Sketch</NavLink>
                </li>
                <li className={location.pathname === '/flow' ? 'active' : ''}>
                    <NavLink to="/flow">Flow</NavLink>
                </li>
                <li className={location.pathname === '/logbook' ? 'active' : ''}>
                    <NavLink to="/logbook">Logbook</NavLink>
                </li>
                </ul>
            </nav>
        </header>
    );
  }

  export default Header;