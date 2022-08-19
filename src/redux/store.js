import {
    createStore, combineReducers, applyMiddleware
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import logger from 'react-redux'

import {
    CounterReducer,
    UserReducer
} from './Reducers/CounterReducer';

// import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    CounterReducer,
    UserReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
);
export default store;