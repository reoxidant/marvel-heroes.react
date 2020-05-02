import React from 'react';
import Header from '../header';
import Banner from '../banner';
import CharactersListManager from '../characters-list-manager';
import CharactersList from '../character-list';
import Footer from '../footer';

import './app.css';

const App = () => {
    return (
        <div className="app">
            <Header/>
            <Banner/>
            <CharactersListManager/>
            <CharactersList/>
            <Footer/>
        </div>
    );
};

export default App;