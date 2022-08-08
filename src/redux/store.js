import {
    createStore, combineReducers, applyMiddleware, compose,
} from 'redux';

import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    // loading
});

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
);
export default store;