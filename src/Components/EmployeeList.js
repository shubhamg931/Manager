import _ from 'lodash';
import React, {Component} from 'react';
import {ListView} from "react-native";
import {connect} from 'react-redux';
import {employeesFetch} from "../actions";
import EmployeeListItem from "./EmployeeListItem";

class EmployeeList extends Component{
    componentWillMount(){
        this.props.employeesFetch();

        this.makeDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){
        console.log("COMPONENTWILLRECEIVEPROPS");
        this.makeDataSource(nextProps);
    }

    makeDataSource({employees}){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee){
        return <EmployeeListItem employee={employee} />;
    }

    render(){
        console.log("hmmmm: " + JSON.stringify(this.props));

        return(
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    };
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return {...val, uid};
    });

    return { employees };
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);