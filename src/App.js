import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './CSS/App.css';
import Header from "./Components/header";
import Wrapper from "./Components/Wrapper";
import Footer from "./Components/Footer.js";
import homePage from "./pages/home";
import contactPage from "./pages/contact";
import portfolioPage from "./pages/portfolio";
import {Home, Contact, Portfolio} from "./variables/pathNames";

function App() {
  return (
    <Router>
      <div className="App">
        <Header pageName="Home"/>
        <Wrapper>
          <Route exact path={Home} component={homePage} />
          <Route exact path={Contact} component={contactPage} />
          <Route exact path={Portfolio} component={portfolioPage} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;