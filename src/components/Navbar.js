import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaGift, FaStar, FaUsers, FaGamepad } from 'react-icons/fa'; // Font Awesome ikonları

const Navbar = () => {
    const location = useLocation(); // Aktif olan sayfanın yolunu almak için

    return (
        <nav className="navbar">
            <NavLink 
                to="/" 
                className="nav-link" 
                activeClassName="active"
            >
                <i className={`fas ${location.pathname === '/' ? 'fa-lock-open icon-lock-open' : 'fa-lock icon-lock'}`}></i> Şifre Üret
            </NavLink>
            <NavLink to="/page1" className="nav-link" activeClassName="active">
                <i className="fas fa-tools"></i> Page1
            </NavLink>
            <NavLink to="/page2" className="nav-link" activeClassName="active">
                <FaGamepad className="nav-icon" /> Playground
            </NavLink>
            <NavLink to="/page3" className="nav-link" activeClassName="active">
                <FaUsers className="nav-icon" /> Arkadaşlar
            </NavLink>
        </nav>
    );
};

export default Navbar;
