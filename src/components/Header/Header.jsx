import React from "react";
import './Header.scss';

const apiKey = import.meta.env.VITE_API_URL;
console.log(apiKey);

function Header () {
    
    return(

        <div className="Header">
            <h1 className="Header-title">TItre en H1 du Header</h1>
        </div>
    )

}

export default Header;