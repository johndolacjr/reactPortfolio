import React from 'react';
import NavBar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ReactGhCal from 'react-github-calendar';

function App() {
  return (
    <>
    <Router>
      <NavBar />
        <Switch>
          <Route path='/' exact />
        </Switch>
        <div>
        <ReactGhCal username='johndolacjr'/>
        </div>
    </Router>
    </>
  );
}

export default App;
