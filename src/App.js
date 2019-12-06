import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NavBar from "./components/layout/NavBar";
import Dashboard from './components/layout/Dashboard';
import Battle from './components/battle/Battle';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/battle' component={Battle} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
