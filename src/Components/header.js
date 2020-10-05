import React from 'react';
// import './CSS/App.css';

function Header(stuff) {
  return (
     <div className="navbar bg-secondary">
          <nav className="dropdown">
               <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{stuff.pageName}</button>
               
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