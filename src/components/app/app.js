import React from 'react';
import Header from '../header';
import Banner from '../banner';
import CharactersList from '../characters-list';

import './app.css';

const App = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <Banner/>
            <CharactersList/>
        </div>
    );
};

export default App;