import React from "react";
import './Header.scss';
import { getEnvVariable } from '../../utils/env';

const apiKey = getEnvVariable('VITE_API_URL');
console.log(apiKey);

function Header () {
    
    return(

        <div className="Header">
            <h1 className="Header-title">J'ai réussi à deploy avec un push !</h1>
        </div>
    )

}

export default Header;