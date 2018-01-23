import types from './types';
import axios from 'axios';

const BASE_URL = "http://api.reactprototypes.com";


export function signUp(cred){
    return dispatch => {

        axios.post(`${BASE_URL}/signup`, cred).then(resp => {
            console.log("Resp from Signup: ", resp);

            localStorage.setItem('token', resp.data.token);

            dispatch({type: types.SIGN_UP});
        }).catch(err => {
            dispatch({
                type: types.ERROR,
                payload: err.response.data.error
            })
        });
    }
}

export function signIn(cred){
    return dispatch => {

        axios.post(`${BASE_URL}/signin`, cred).then(resp => {
            console.log("Resp from Sign in: ", resp);

            localStorage.setItem('token', resp.data.token);

            dispatch({type: types.SIGN_IN});
        }).catch(err => {
            dispatch({
                type: types.ERROR,
                payload: 'Invalid Username or Password.'
            });
        });
    }
}

export function getQuote(){
    return dispatch => {

        axios.get(BASE_URL, {headers: {authorization: localStorage.getItem('token')}}).then(resp => {console.log('Quote request response: ', resp)});
    }
}

