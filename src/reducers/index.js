import {combineReducers} from 'redux';
import userReducer from './user_reducer';
import {reducer as formReducer} from 'redux-form';


export default combineReducers({
    user: userReducer,
    form: formReducer
});