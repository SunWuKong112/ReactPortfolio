import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {use100vh, use100vj} from "react-div-100vh";
import Header from "./Components/header";
import Wrapper from "./Components/Wrapper";
import Footer from "./Components/Footer.js";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import PortfolioPage from "./pages/portfolio";
import SplashPage from "./pages/splash";
import RickRoll from "./pages/RickRoll";
import {Splash, Home, Contact, Portfolio} from "./variables/pathNames";
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/App.css';

function App() {
  const[PageName, setPageName] = useState("RickRoll");
  const height = use100vh();
  const imageHeight = height*2;

  return (
    <div>
      {PageName === "Splash" ? <div style={{backgroundImage: `url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffc05.deviantart.net%2Ffs71%2Ff%2F2012%2F333%2Fd%2F7%2Fview_2142_by_tituslunter-d5mjly4.jpg&f=1&nofb=1")`, backgroundSize:imageHeight, height:height}}>
        <SplashPage onClick={(val)=>{
          setPageName(val);
        }}/>
      </div>
      :
      <Router>
        {PageName !== "Splash" && PageName === "Contact" || PageName === "Home" || PageName === "Portfolio"? <Header pageName={PageName}/>:<p></p>}
        <Wrapper>
          <Switch>
            <Route exact path="/">
              {PageName === "Home" ? <HomePage /> : PageName === "Portfolio" ? <PortfolioPage /> : PageName === "Contact" ? <ContactPage /> : <RickRoll />}
            </Route>
            {/* <Route>
              <RickRoll />
            </Route> */}
          </Switch>
        </Wrapper>
        {/* <Footer /> */}
    </Router>}
    </div>
  );
}

export default App;