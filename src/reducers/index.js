import {combineReducers} from 'redux';
import userReducer from './user_reducer';
import {reducer as formReducer} from 'redux-form';
import movieReducer from './movie_reducer';


export default combineReducers({
    user: userReducer,
    form: formReducer,
    movie: movieReducer
});

