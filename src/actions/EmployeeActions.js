import {
    CREATE_EMPLOYEE,
    DELETE_EMPLOYEE_SUCCESS,
    EDIT_EMPLOYEE_SUCCESS,
    FETCH_EMPLOYEES_SUCCESS,
    UPDATE_EMPLOYEE
} from "./types";
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
export const employeeUpdate = ({prop, value}) => {
    return{
        type: UPDATE_EMPLOYEE,
        payload: {prop, value}
    };
};

export const employeeCreate = ({name, phone, shift}) => {
    const {currentUser} = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({name, phone, shift})
            .then(() => {
                dispatch({type: CREATE_EMPLOYEE});
                Actions.main({type: 'reset'});
            });
    };
};

export const employeesFetch = () => {
    const {currentUser} = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on("value", snapshot => {
                console.log("inside employeesfetch action: " + JSON.stringify(snapshot.val()));
                dispatch({type: FETCH_EMPLOYEES_SUCCESS, payload: snapshot.val()});
            });
    };
};

export const employeeEdit = ({name, phone, shift, uid}) => {
    const {currentUser} = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({name, phone, shift})
            .then(() => {console.log("Saved! updated employee :)");
            dispatch({type: EDIT_EMPLOYEE_SUCCESS});
            Actions.main();})
            .catch(() => {console.log("Some Bhasad was there :(")});
    }
};

export const employeeDelete = ({uid}) => {
    const {currentUser} = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                dispatch({type:DELETE_EMPLOYEE_SUCCESS});
                Actions.main();
            });
    }
};