import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from './components/Signin';
import Signup from './components/Signup';
import Forgotpassword from './components/Forgotpassword';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';

const routing = <Router>
    <div>
        <Navigation />
        <Switch>

            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/" component={Homepage} />
            <Route path="/forgotpassword" component={Forgotpassword} />
            <Route path="/" component={Dashboard} />

        </Switch >
    </div >
</Router >
ReactDOM.render(routing, document.getElementById('root'));
