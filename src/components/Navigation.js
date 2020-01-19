import React from 'react';
import { Link, withRouter } from "react-router-dom";
import '../assets/css/nav.css';
import Logo from '../assets/images/dealstimer.png';


const Navigation = (props) => {
    const handleLogout = () => {
        localStorage.setItem('isAuth', false);
        props.history.push('/');
    }

    const guestLinks = (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0 ml-auto">
                <Link to="/" className="signInLink">
                    {"Sign In"}
                </Link>
                <Link to="/signup" className="signUpLink">
                    <button className="btn btn-outline-primary my-2 my-sm-0">Create an Account</button>
                </Link>
            </form>
        </div>
    );
    const authLinks = (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="form-inline my-2 my-lg-0 ml-auto">
                <button className="btn btn-outline-primary my-2 my-sm-0" onClick={handleLogout}>Sign Out</button>
            </div>
        </div>
    );
    let navigation;
    const isAuthenticated = localStorage.getItem('isAuth');
    if (isAuthenticated === "true") {
        navigation = authLinks;
    } else {
        navigation = guestLinks;
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/">
                <img className="logo" src={Logo} alt="Logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {navigation}

        </nav>
    );
}

export default withRouter(Navigation);