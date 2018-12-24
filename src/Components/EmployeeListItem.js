import React, {Component} from 'react';
import {Card, CardItem} from "./common";
import {Actions} from 'react-native-router-flux';
import {Text, TouchableWithoutFeedback, View} from "react-native";

class EmployeeListItem extends Component{
    onRowPress(){
        Actions.editEmployee({employee: this.props.employee});
    }

    render(){
        return(
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardItem>
                        <Text style={styles.titleStyle}>
                            {this.props.employee.name}
                        </Text>
                    </CardItem>
                </View>
            </TouchableWithoutFeedback>

        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
        fontWeight: 'bold'
        // alignSelf: 'left'
    }
};

export default EmployeeListItem;