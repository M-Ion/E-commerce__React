import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

// <BrowserRouter></BrowserRouter> it gives our application that's sitting between this component all the funcionality of routing.
ReactDOM.render(
  <BrowserRouter> 
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
