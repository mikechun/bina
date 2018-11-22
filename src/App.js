import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import './App.scss';

import Header from './Header';
import Footer from './Footer';
import WorkPage from './WorkPage';
import AboutPage from './AboutPage';
import ProjectAPage from './ProjectAPage';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App container-fluid">
          <Header className="Header" />
          <Route path='/' exact component={WorkPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/project-a' component={ProjectAPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
