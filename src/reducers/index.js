import {combineReducers} from 'redux';
import AuthReducer from "./authReducer";
import EmployeeFormReducer from "./EmployeeFormReducer";
import EmployeeReducer from "./EmployeeReducer";

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeeReducer
});