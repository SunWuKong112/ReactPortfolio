import React from 'react';

function Header(stuff) {
     return (
     <div className="navbar bg-secondary">
          <div className="col">
               <h2 class="">{stuff.pageName}</h2>{stuff.pageName !== "Home" && stuff.pageName  !== "Splash" ? <button className="" onClick={(e)=>stuff.onClick("Home")}>Home</button>: <p></p>}
               {stuff.pageName !== "Portfolio" && stuff.pageName  !== "Splash" ? <button className="" href="Portfolio" onClick={(e)=>stuff.onClick("Portfolio")}>Portfolio</button>: <p></p>}
               {stuff.pageName !== "Contact" &&  stuff.pageName !== "Splash" ? <button className="" href="Contact" onClick={(e)=>stuff.onClick("Contact")}>Contact me</button>: <p></p>}
               {stuff.pageName === "Contact" ? <button className="" href="Contact" onClick={(e)=>stuff.onClick("RickRoll")}>Click me for a 'surprise'</button>: <p></p>}
          </div>
     </div>
  );
}

export default Header;