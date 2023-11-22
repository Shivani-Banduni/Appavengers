// redux/store.js

import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {}; // Define initial state if needed

const store = createStore(rootReducer, initialState);

export default store;
