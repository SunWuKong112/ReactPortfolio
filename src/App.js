import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Components/header";
import Wrapper from "./Components/Wrapper";
import Footer from "./Components/Footer.js";
import HomePage from "./pages/home";
import ContactPage from "./pages/home";
import PortfolioPage from "./pages/portfolio";
import {Home, Contact, Portfolio} from "./variables/pathNames";
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/App.css';

function App() {
  return (
    <Router>
      <div>
        <Header pageName="Home"/>
        <Wrapper>
          <Switch>
            <Route path={Home}>
               <HomePage />
            </Route>
          <Route path={Portfolio}>
               <PortfolioPage />
          </Route>
          {/* <Route path={Contact}>
               <ContactPage />
          </Route> */}
          </Switch>
        </Wrapper>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;