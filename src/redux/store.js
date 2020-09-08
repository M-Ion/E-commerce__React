import { createStore, applyMiddleware } from 'redux'; // Middleware, all it does is it catches the action it console logs it out for us and then it moves it along.
import { persistStore } from 'redux-persist'; //It allows our browser to actually cache our store depending on certaun configuration.
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [ logger ];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
