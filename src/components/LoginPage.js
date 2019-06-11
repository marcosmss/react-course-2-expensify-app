import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startLoginFacebook } from '../actions/auth';

export const LoginPage = () => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <button className="loginBtn loginBtn--google" onClick={startLogin}>Login with Google</button> 
            <button className="loginBtn loginBtn--facebook" onClick={startLoginFacebook}>Login with Facebook</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);