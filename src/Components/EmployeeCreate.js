import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Container, Content, Text} from 'native-base';
import {ButtonRoundedExample, Card, CardItem} from "./common";
import {employeeUpdate, employeeCreate} from "../actions";
import EmployeeForm from "./EmployeeForm";

class CreateEmployee extends Component{

    onButtonPress(){
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone,shift: shift || "Monday"});
    }

    render(){
        return(
            <Container>
                <Content>
                    <EmployeeForm {...this.props} />
                    <Card>
                        <CardItem>
                            <Button block
                                onPress={this.onButtonPress.bind(this)}>
                                <Text>
                                    Add Employee
                                </Text>
                            </Button>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(CreateEmployee);