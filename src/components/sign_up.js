import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {renderInput} from "../helpers/index";
import {signUp} from "../actions/index";

class SignUp extends Component{



    handleSignUp(vals){
        console.log("vals: ", vals);

        this.props.signUp(vals);
    }

    render(){

        const {handleSubmit} = this.props;

        return (
            <div>
                <h1 className="center-align">Sign Up</h1>
                <div className="row">
                    <div className="col s8 offset-s2">
                        <div className="card grey lighten-3">
                            <div className="card-content">
                                <form onSubmit={handleSubmit(this.handleSignUp.bind(this))}>
                                    <Field name="email" type="text" placeholder="email" component={renderInput}/>
                                    <Field name="password" type="password" placeholder="password" component={renderInput}/>
                                    <Field name="confirmPassword" type="password" placeholder="confirm password" component={renderInput}/>
                                    <div className="right-align">
                                        <button className="btn blue darken-4">Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function validate(values){
    const error={};

    if(!values.email){
        error.email = "Please enter your email address";
    }

    if(!values.password){
        error.password = "Please enter a password";
    }

    if(values.password !== values.confirmPassword){
        error.confirmPassword = "Passwords do not match";
    }

    return error;
}

SignUp = reduxForm({
    form: 'sign-up',
    validate: validate
})(SignUp);

export default connect(null, {signUp})(SignUp);

