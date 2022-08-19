import {
    GET_USER_FAILD,
    GET_USER_SUCCESS,
    USER_REQUEST
} from "../types";

const initState = {
    loading: false,
    usres: [],
    errors: ''
}

export const UserReducer = (state = initState, action) => {
    const { type, payload } = action;
    if (type === USER_REQUEST) {
        return {
            ...state,
            loading: true
        }
    } else if (type === GET_USER_SUCCESS) {
        return {
            ...state,
            users: payload
        }
    } else if (type === GET_USER_FAILD) {
        return {
            ...state,
            errors: payload
        }
    } else {
        return state;
    }
}