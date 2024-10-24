import React from "react";
import './Header.scss';
import { getEnvVariable } from '../../utils/env';

const apiKey = getEnvVariable('VITE_API_URL');
console.log(apiKey);

function Header () {
    
    return(

        <div className="Header">
            <h1 className="Header-title">Titre en H1 du Header</h1>
        </div>
    )

}

export default Header;