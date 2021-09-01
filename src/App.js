import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Intro from './Intro/Intro';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';

function App() {
  return (
    <Router>
      <Switch>
    <div className="App">
      <Route exact path="/"> 
        <Intro />
        <About />
        <Portfolio />
        <Contact />
      </Route>
    </div>
    </Switch>
    </Router>
  );
}

export default App;
