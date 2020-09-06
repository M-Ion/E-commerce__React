import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

import store from './redux/store';

// <BrowserRouter></BrowserRouter> it gives our application that's sitting between this component all the funcionality of routing.

// <Provider></Provider> is a component that is the parent of everything inside of our application, it allows  us to get access to all of the things related to the store that we're going to put all of the actual code we want to store on our redux state.
ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
