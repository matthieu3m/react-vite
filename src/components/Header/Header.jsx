import React, { useState } from "react";
import './Header.scss';
import { getEnvVariable } from '../../utils/env';

const apiKey = getEnvVariable('VITE_API_URL');
console.log(apiKey);

function Header({ title = "Titre par défaut" }) {
    const [headerTitle, setHeaderTitle] = useState(title);

    const handleClick = () => {
        setHeaderTitle("Titre modifié après clic !");
    };

    return (
        <div className="Header">
            <h1 className="Header-title">{headerTitle}</h1>
            <button onClick={handleClick}>Modifier le Titre</button>
        </div>
    );
}

export default Header;
