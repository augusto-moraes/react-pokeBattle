import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NavBar from "./components/layout/NavBar";
import Dashboard from './components/layout/Dashboard';
import Battle from './components/battle/Battle';
import Tutorial from './components/tutorial/Tutorial';
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/battle' component={Battle} />
            <Route exact path='/tutorial' component={Tutorial} />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
