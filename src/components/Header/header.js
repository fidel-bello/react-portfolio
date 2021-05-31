import React from 'react';



function Header() {
    return (
<header>
    <div class="container">
      <div class="row">
        <div class="brand-name">
          <a href="/" class="logo">Welcome!</a>
        </div>
        <div class="hamburger">
          <i class="fa fa-bars"></i>
        </div>
        <div class="navbar">
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

export default Header;