import React from 'react';

import './characters-list-manager.css';

const CharactersListManager = () => {
    return (
        <div className="container-char-list">
            <div className="header-char-list">
                <h2>
                    MARVEL CHARACTERS LIST
                </h2>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="search-panel-char-list">
                        <span className="icon-search">
                             <span className="icon--svg icon--svg--black-stroke icon--search" aria-hidden="true"><svg
                                 xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17"
                                 fill-rule="evenodd"><circle cx="6.5" cy="6.5" r="5.5"></circle><path
                                 d="M14 14l3.536 3.536"></path></svg>
                             </span>
                        </span>
                        <input type="text" placeholder="Search"/>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12">
                    <div className="filter-char-list">
                        <ul className="nav nav-pills">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                                   aria-haspopup="true" aria-expanded="false">Movie</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Separated link</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                                   aria-haspopup="true" aria-expanded="false">TV</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Separated link</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row char-list-sort">
                <div className="col-lg-6">
                    <span className="char-list-sort-result">2587 results</span>
                </div>
                <div className="col-lg-5">
                    <div className="char-list-sort__dropdown">
                        <span className="char-list-sort-result">SORT BY</span>
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                           aria-haspopup="true" aria-expanded="false">A-Z</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">A-Z</a>
                            <a className="dropdown-item" href="#">Z-A</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharactersListManager;