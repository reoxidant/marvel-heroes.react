import React from 'react';

import './header.css';
import logo from './marvel-logo.svg';

const Header = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="navbar-brand">
                    <a href="/"><img className="logo" src={logo} alt="logo"/></a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="/">Characters</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">Comics</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">Movies</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">More</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;