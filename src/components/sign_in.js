import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {renderInput} from "../helpers/index";
import {connect} from 'react-redux';
import {signIn} from "../actions/index";

class SignIn extends Component{



    handleSignIn(vals){
        console.log("vals: ", vals);

        this.props.signIn(vals);
    }

    render(){

        const {handleSubmit, authError} = this.props;

        return (
            <div>
                <h1 className="center-align">Sign In</h1>
                <div className="row">
                    <div className="col s8 offset-s2">
                        <div className="card grey lighten-3">
                            <div className="card-content">
                                <form onSubmit={handleSubmit(this.handleSignIn.bind(this))}>
                                    <Field name="email" type="text" placeholder="email" component={renderInput}/>
                                    <Field name="password" type="password" placeholder="password" component={renderInput}/>
                                    <p className="center-align red-text">{authError}</p>
                                    <div className="right-align">
                                        <button className="btn blue darken-4">Sign In</button>
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
        error.password = "Please enter your password";
    }


    return error;
}

SignIn = reduxForm({
    form: 'sign-in',
    validate: validate
})(SignIn);

function mapStateToProps(state){
    return {
        authError: state.user.error  //This can't be error only because redux uses it.
    }
}

export default connect(mapStateToProps, {signIn})(SignIn);


