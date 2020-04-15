import React from 'react';
import './bootstrap.min.css';

const url_api = 'https://gateway.marvel.com/v1/public/characters';

const getResource = async (url) => {
    const res = await fetch(url);

    if(!res.ok)
        throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);

    const body = await res.json();
    return body;
};

getResource(`${url_api}?&apikey=${process.env.REACT_APP_PUBLIC_API_KEY}`)
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(`Fetch get a error\n${error}`);
    });
