import React, {Component} from 'react';
import {connect} from 'react-redux';
import {employeeUpdate} from "../actions";
import {Picker, View} from "react-native";
import {Form, Input, Item, Label} from "native-base";
import {Card, CardItem} from "./common";

class EmployeeForm extends Component{
    render(){
        return(
            <View>
                <Form>
                    <Item floatingLabel>
                        <Label>Name</Label>
                        <Input value={this.props.name}
                               onChangeText={text => this.props.employeeUpdate({prop: 'name', value: text})}/>
                    </Item>
                    <Item floatingLabel last>
                        <Label>Phone Number</Label>
                        <Input value={this.props.phone}
                               onChangeText={text => this.props.employeeUpdate({prop: 'phone', value: text})}/>
                    </Item>
                </Form>
                <Card>
                    <CardItem>
                    <Picker
                        style={{display:'flex',flex: 1, alignSelf: 'stretch'}}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({prop: 'shift', value: value})}>
                    <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                    </Picker>
                    </CardItem>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};
};

export default connect(mapStateToProps,{employeeUpdate})(EmployeeForm);