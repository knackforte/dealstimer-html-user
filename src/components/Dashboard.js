import React from 'react';
import '../assets/css/dashboard.css';
import { isLogin } from './utils';

export default class Dashboard extends React.Component {
    constructor (props) {
        super(props);
        if (isLogin() === "false") {
            this.props.history.push('/');
        } else {
            this.props.history.push('/dashboard');
        }
    }
    render() {
        return (
            <div className="container" >
                <div className="mydiv">
                    <h1>The website is under construction.</h1>
                </div>
            </div>
        );
    }
}