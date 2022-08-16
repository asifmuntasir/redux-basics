import {
    createStore, combineReducers, applyMiddleware, compose,
} from 'redux';

import { CounterReducer } from './Reducers/CounterReducer';

// import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    CounterReducer
});

const store = createStore(
    rootReducer,
    // compose(applyMiddleware(thunk))
);
export default store;