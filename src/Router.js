import React from "react";
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from "./Components/LoginForm";
import EmployeeList from "./Components/EmployeeList";
import CreateEmployee from "./Components/EmployeeCreate";
import EmployeeEdit from "./Components/EmployeeEdit";

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root">
                <Scene key="auth" hideNavBar={true}>
                    <Scene key='login' component={LoginForm} title="Please Login" initial hideNavBar={false}/>
                </Scene>
                <Scene key="main" hideNavBar={true}>
                    <Scene key='employeeList' component={EmployeeList}
                           title="Employee list page" hideNavBar={false}
                           rightTitle="Add" onRight={() => Actions.createEmployee()} initial/>
                    <Scene key="createEmployee" title="Create Employee" component={CreateEmployee}
                           hideNavBar={false}/>
                    <Scene key="editEmployee" title="Edit/View Employee" component={EmployeeEdit}
                           hideNavBar={false}/>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;