import {CREATE_EMPLOYEE, DELETE_EMPLOYEE_SUCCESS, EDIT_EMPLOYEE_SUCCESS, UPDATE_EMPLOYEE} from "../actions/types";

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case UPDATE_EMPLOYEE:
            return {...state, [action.payload.prop]:action.payload.value};
        case CREATE_EMPLOYEE:
            return INITIAL_STATE;
        case EDIT_EMPLOYEE_SUCCESS:
            return INITIAL_STATE;
        case DELETE_EMPLOYEE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};