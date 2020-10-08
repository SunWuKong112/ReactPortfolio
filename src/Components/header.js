import React from 'react';
import {Link} from "react-router-dom";
import setPageName from "../App";

function Header(stuff) {
     function renderHome(){
          //Set pageName to Home

          //go to path "/Home"
     }
     
     function renderPortfolio(){
          //Set pageName to Portfolio

          //go to path "/Portfolio"
     }

     function renderContact(){
          //Set pageName to Contact

          //go to path "/Contact"
     }

     return (
     <div className="navbar bg-secondary">
          <nav>
               <h2 >{stuff.pageName}</h2>
               {stuff.pageName !== "Home" && stuff.pageName  !== "Splash" ? <a className="dropdown-item" href="Home" onClick={()=>setPageName("Home")}>Home</a>: <p></p>}
               {stuff.pageName !== "Portfolio" && stuff.pageName  !== "Splash" ? <a className="dropdown-item" href="Portfolio" onClick={()=>setPageName("Portfolio")}>Portfolio</a>: <p></p>}
               {stuff.pageName !== "Contact" &&  stuff.pageName !== "Splash" ? <a className="dropdown-item" href="Contact" onClick={()=>setPageName("Contact")}>Contact me</a>: <p></p>}
          </nav>
     </div>
  );
}

export default Header;