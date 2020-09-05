import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); //Will close the subscription.
  }

  render(){
    return (
      // <Switch></Switch> https://reactrouter.com/web/api/Switch
      // <Route exact(true - this path must be exactly || false) path(string that's equal to the path itself from the current place) component(will be the component that we want to render right).
        <div>
          <Header currentUser={ this.state.currentUser } />
          <Switch>
            <Route exact path='/' component={ HomePage } /> 
            <Route path='/shop' component={ ShopPage } /> 
            <Route path='/signin' component={ SignInAndSignUpPage } /> 
          </Switch>
        </div>
    )
  }
}

export default App;
