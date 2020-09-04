import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  // <Switch></Switch> https://reactrouter.com/web/api/Switch
  // <Route exact(true - this path must be exactly || false) path(string that's equal to the path itself from the current place) component(will be the component that we want to render right).
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ HomePage } /> 
        <Route path='/hats' component={ HatsPage } /> 
      </Switch>
    </div>
  );
}

export default App;
