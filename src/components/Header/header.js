import React from 'react';



function Header() {
    return (
<header>
    <div className="container">
      <div className="row">
        <div className="brand-name">
          <a href="/" class="logo">Welcome!</a>
        </div>
        <div className="hamburger">
          <i className="fa fa-bars"></i>
        </div>
        <div className="navbar">
          <ul>
            <li><a href="#home" class="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#message">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
    )
}

export default Header; console.log('hi')