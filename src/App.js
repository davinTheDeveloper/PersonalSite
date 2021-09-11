import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './Landing/Landing';
import Intro from './Intro/Intro';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import FooterBar from './FooterBar/FooterBar';

function App() {
  return (
    <Router>
      <Switch>
    <div className="App">
      <Route exact path="/"> 
      <Landing />
      </Route>
      <Route path="/Home">
        <Intro />
        <About />
        <Portfolio />
        <Contact />
        <FooterBar />
      </Route>
    </div>
    </Switch>
    </Router>
  );
}

export default App;
