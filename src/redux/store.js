import { createStore, applyMiddleware } from 'redux'; // Middleware, all it does is it catches the action it console logs it out for us and then it moves it along.
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [ logger ];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;