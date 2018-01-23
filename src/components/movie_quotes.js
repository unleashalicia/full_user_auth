import React from 'react';
import {connect} from 'react-redux';
import {getQuote} from '../actions';

const MovieQuotes = props => {

    props.getQuote();

    return (
        <div>
            <h1 className="center-align">Movie Quote</h1>
            <h3>I'll be back.</h3>
        </div>
    )
}

export default connect(null, {getQuote})(MovieQuotes);