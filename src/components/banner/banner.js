import React from 'react';

import './banner.css';

const Banner = () => {
    return(
        <div className="row">
            <div className="banner w-100">
                <div className="banner__block d-flex justify-content-center align-items-center">
                    <div className="banner_block-text">
                        <h1>Marvel Characters</h1>
                        <span>Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Banner;