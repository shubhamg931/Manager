import React, { Component } from 'react';
import {Card, CardItem, Spinnner} from "./common";
import {Container, Content, Form, Item, Input, Label, Text, Button} from 'native-base';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from "../actions";
import {View} from "react-native";

class loginForm extends Component{

    onEmailChanged(text){
        this.props.emailChanged(text);
    }

    onPasswordChanged(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        const {email, password} = this.props;

        this.props.loginUser({email, password});
    }

    renderError(){
        if(this.props.error){
            return (
              <View style={{backgroundColor: 'white'}}>
                  <Text style={styles.errorTextStyle}>
                      {this.props.error}
                  </Text>
              </View>
            );
        }
    }

    renderButton(){
        if(this.props.loading === true){
            return <Spinnner size="large"/>;
        }
        return(
            <Button block onPress={this.onButtonPress.bind(this)}>
                <Text>
                    Sign In
                </Text>
            </Button>
        );
    }

    render(){
        return(
            <Container>
                {/*<HeaderNoShadow headerText="Managing App"/>*/}
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input onChangeText={this.onEmailChanged.bind(this)}
                            value={this.props.email}/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input secureTextEntry
                                onChangeText={this.onPasswordChanged.bind(this)}
                            value={this.props.password}/>
                        </Item>
                    </Form>
                    {this.renderError()}
                    <Card>
                        <CardItem>
                            {this.renderButton()}
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center',
    }
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
};

export default connect(mapStateToProps, {emailChanged, passwordChanged,
loginUser})(loginForm);