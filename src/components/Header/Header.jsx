import "./Header.sass";
import ScrollSpyLink from '../ScrollSpyLink/ScrollSpyLink.jsx';
import React, { useState } from 'react';

const Header = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  const closeMenu = () => setClick(false)

    return(
      <>
      <header>
        <nav className={color ? "nav nav-bg" : "nav"}>
          <div className="logo"><img src="../src/assets/logo-nav.png" alt="logo" /></div>
          <ul id="navbar" onClick={handleClick} className={click ? "#navbar active" :"#navbar"}>
            <li>
              <ScrollSpyLink to ="home" onClick={closeMenu}>Home</ScrollSpyLink>
              </li>
            <li><ScrollSpyLink to="about" onClick={closeMenu}>About</ScrollSpyLink></li>
            <li><ScrollSpyLink to="menu" onClick={closeMenu}>Menu</ScrollSpyLink></li>
            <li><ScrollSpyLink to="gallery" onClick={closeMenu}>Gallery</ScrollSpyLink></li>
            <li><ScrollSpyLink to="contact" onClick={closeMenu}>Contact</ScrollSpyLink></li>
          </ul>
          <div id="mobile" onClick={handleClick}>
            <i id="bar" className="material-icons">{click ? "close" : "menu"}</i>
          </div>
        </nav>      
      </header>
      </>
    );

  
}

export default Header