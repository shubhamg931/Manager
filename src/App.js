import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from "./Router";

class App extends Component{

    componentWillMount(){
        const config = {
            apiKey: "AIzaSyBGyCR3JqGURF2xAr0BW34bkM2B_7fMh_Q",
            authDomain: "reactnativeapp931.firebaseapp.com",
            databaseURL: "https://reactnativeapp931.firebaseio.com",
            projectId: "reactnativeapp931",
            storageBucket: "reactnativeapp931.appspot.com",
            messagingSenderId: "725843962905"
        };

        if(!firebase.apps.length) {
            firebase.initializeApp(config);
        }
    }

    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;