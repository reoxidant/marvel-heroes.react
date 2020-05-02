import React from 'react';

import './header.css';
import logo from './marvel-logo.svg';

const Header = () => {
    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg bg-dark fixed-top col-12">
                <div className="col-12">
                    <div className="navbar-brand d-flex justify-content-center">
                        <a href="/"><img className="logo" src={logo} alt="logo"/></a>
                    </div>
                    <div className="collapse navbar-collapse d-flex justify-content-center">
                        <ul className="navbar-nav">
                            <li className="nav-item active"><a className="nav-link" href="/">Characters</a></li>
                            <li className="nav-item"><a className="nav-link" href="/">Comics</a></li>
                            <li className="nav-item"><a className="nav-link" href="/">Movies</a></li>
                            <li className="nav-item"><a className="nav-link" href="/">More</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}



export default Header;