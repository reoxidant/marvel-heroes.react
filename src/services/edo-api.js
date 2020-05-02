import React from 'react';

const url = "http://edo.omgups.ru/test_start.php?mode=start&tid=169&sheid=552";


async function getResponse(url){

    const response = await fetch(url);

    if(!response.ok){
        throw new Error("Could not fetch" + url + "received status " + response.status);
    }

    return await response.text();
}

getResponse(url).then((res) => {
    return res;
}).then((html) => {
    const parser = new DOMParser();

    const document = parser.parseFromString(html,"text/html");

    console.log(document);
});