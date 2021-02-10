import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portfolio from './components/pages/Portfolio';
import Photography from './components/pages/Photography';
// import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/photography' component={Photography} />
          {/* <Route path='/sign-up' component={SignUp} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;