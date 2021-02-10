import React from 'react';
import Portfolio from './components/Pages/Portfolio.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ReactGhCal from 'react-github-calendar';

    <>
    <Portfolio />
        <Router>
        <Switch>
          <Route path='/components/Pages/Portfolio.js' exact />
            <ReactGhCal username='johndolacjr'/>
        </Switch>
        </Router>
    </>