import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import './App.scss';

import Header from './Header';
import Footer from './Footer';
import WorkPage from './WorkPage';
import AboutPage from './AboutPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <Header className="Header" />
          <Route path="/bina/" exact component={WorkPage} />
          <Route path="/bina/about" component={AboutPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
