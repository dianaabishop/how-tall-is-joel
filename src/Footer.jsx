
import React from 'react';
import walter_and_paco from './assets/images/walter_and_paquito_edited.png';
import walter_creep from './assets/images/walter_creeper_edited.png';


const Footer = () => {
    return <div className="footer">
        <img className="walter-and-paco-image" src={walter_and_paco} text-align="center" />
        <img className="walter-creeper-image" src={walter_creep} text-align="center" />
    </div>
}

export default Footer;