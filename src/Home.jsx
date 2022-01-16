import React from 'react';
import './styles/main.scss';
import Footer from './Footer.jsx';
import diana_pic from './assets/images/diana_sideways_linkedin_pic.png';

function Home() {
  const { useState } = React;
    return (
        <>
        <div className="main">
          <div className="nav-bar">
            <h2 className="header-h2">🦉 Home</h2>
            <h2 className="header-h2">🦆 About Me</h2>
            <h2 className="header-h2">🐥 C.V.</h2>
            <h2 className="header-h2">🦜 Projects</h2>
            <h2 className="header-h2">🐦 Contact</h2>
          </div>
          <img className = "diana-image" src={diana_pic} text-align="center" />
        </div>
        <Footer />
    </>
  );
        
 }

export default Home;
