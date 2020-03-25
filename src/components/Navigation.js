import React from 'react';
import { Link, withRouter } from "react-router-dom";
import '../assets/css/nav.css';
import Dealstimer from '../assets/images/dealstimer-logo.png';
import Logo from '../assets/images/dealstimer.png';


const Navigation = (props) => {
    const handleLogout = () => {
        localStorage.setItem('isAuth', false);
        props.history.push('/');
    }

    const guestLinks = (
        <div className="dt-container" id="navbarSupportedContent">
            <div className=" top-header top-height-ot">
                <ul className="list list-inline list-unstyled float-right m-0 text-right">
                    <li className="list-inline-item">
                        <Link to="/signin">Login</Link>&nbsp;&nbsp;/&nbsp;&nbsp;
                        <Link to="/signup">Sign Up</Link>&nbsp;&nbsp;/&nbsp;&nbsp;
                        <Link to="#">عربی</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
    const authLinks = (

        <div className="dt-container" id="navbarSupportedContent">
            <div className=" top-header top-height-ot">
                <ul className="list list-inline list-unstyled float-right m-0 text-right">
                    <li className="list-inline-item">
                        <Link onClick={handleLogout}>Logout</Link>

                    </li>
                </ul>
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
        <nav className="navbar navbar-expand-lg ">
            <div className="dt-container">
                <div className="row top-height-oi">
                    <div className="col-sm-6 col-6 align-self-center brand logo">
                        <img alt="" src={Dealstimer} className="logo-md logo-op" />
                    </div>

                </div>
            </div>

            {navigation}

        </nav>
    );
}

export default withRouter(Navigation);