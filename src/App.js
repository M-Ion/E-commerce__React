import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';


function App() {
  // <Switch></Switch> https://reactrouter.com/web/api/Switch
  // <Route exact(true - this path must be exactly || false) path(string that's equal to the path itself from the current place) component(will be the component that we want to render right).
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={ HomePage } /> 
        <Route path='/shop' component={ ShopPage } /> 
      </Switch>
    </div>
  );
}

export default App;
