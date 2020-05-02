import React from 'react';

import './characters-list.css';

const CharactersList = () => {
    return (
        <div className="row">
            <div className="col-12">
                <h1>
                    MARVEL CHARACTERS LIST
                </h1>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="search-panel">
                    <span className="icon-search">
                         <span className="icon--svg icon--svg--black-stroke icon--search" aria-hidden="true"><svg
                             xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17"
                             fill-rule="evenodd"><circle cx="6.5" cy="6.5" r="5.5"></circle><path
                             d="M14 14l3.536 3.536"></path></svg></span>
                    </span>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <form className="filter-form" action="/">
                    <div className="filter-dropdown">
                        <a href="/" className="filter-dropdown__title ">
                            <div className="filter-item">
                                <span>Movie</span>
                                <span>.</span>
                            </div>
                        </a>
                    </div>
                    <div className="filter-dropdown">
                        <a href="/" className="filter-dropdown__title ">
                            <div className="filter-item">
                                <span>TV</span>
                                <span>.</span>
                            </div>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CharactersList;