import { INCREMENT, DECREMENT } from '../types';

const initState = {
    count: 0
}

export const CounterReducer = (state = initState, action) => {
    const { type, payload } = action;

    if (type === INCREMENT) {
        return {
            ...state,
            count: state.count + 1
        }
    } else if (type === DECREMENT) {
        return {
            ...state,
            count: state.count - 1
        }
    } else {
        return state;
    }
}