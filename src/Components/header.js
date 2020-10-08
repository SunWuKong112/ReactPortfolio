import React from 'react';
import {Link} from "react-router-dom";

function Header(stuff) {
  return (
     <div className="navbar bg-secondary">
          <nav>
               <h2 >{stuff.pageName}</h2>
               
               <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" />
               {stuff.pageName !== "Home" ? <a className="dropdown-item" href="home.html">Home</a>: <p></p>}
               {stuff.pageName !== "Portfolio" ? <a className="dropdown-item" href="portfolio.html">Portfolio</a>: <p></p>}
               {stuff.pageName !== "Contact" ? <a className="dropdown-item" href="contact.html">Contact me</a>: <p></p>}
          </nav>
          <h1>{stuff.pageName}</h1>
     </div>
  );
}

export default Header;