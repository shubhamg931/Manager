import _ from 'lodash';
import React, {Component} from 'react';
import {Card, CardItem, Confirm} from "./common";
import {Button, Container, Content, Text} from "native-base";
import EmployeeForm from "./EmployeeForm";
import {employeeDelete, employeeEdit, employeeUpdate} from "../actions";
import {connect} from 'react-redux';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component{
    state={
        showModal: false
    };

    componentWillMount(){
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        })
    }

    onButtonPress(){
        const {name, phone, shift} = this.props;
        this.props.employeeEdit({name, phone, shift, uid: this.props.employee.uid});
     }

    onTextPress(){
        const {phone, shift} = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onAccept(){
        this.setState({showModal: false});

        const {uid} = this.props.employee;
        this.props.employeeDelete({uid});
    }

    onDecline(){
        this.setState({showModal: false});
    }

    render(){
        return(
            <Container>
                <Content>
                    <EmployeeForm />
                    <Card>
                        <CardItem>
                            <Button block onPress={this.onButtonPress.bind(this)}>
                                <Text>
                                    Save Changes
                                </Text>
                            </Button>
                        </CardItem>
                        <CardItem>
                            <Button block onPress={this.onTextPress.bind(this)}>
                                <Text>
                                    Text Schedule
                                </Text>
                            </Button>
                        </CardItem>
                        <CardItem>
                            <Button block onPress={() => this.setState({showModal: !this.state.showModal})}>
                                <Text>
                                    Fire Him/Her! :)
                                </Text>
                            </Button>
                        </CardItem>

                        <Confirm
                        visible={this.state.showModal}
                        onAccept={this.onAccept.bind(this)}
                        onDecline={this.onDecline.bind(this)}>
                            Are you sure you want to fire him?
                        </Confirm>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate, employeeEdit, employeeDelete})(EmployeeEdit);