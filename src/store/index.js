import { createStore, compose, applyMiddleware } from 'redux';

import reducers from './reducers';

const tronMiddleware = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer : () => {};

const store = createStore(reducers, compose(tronMiddleware(...[])));

export default store;
