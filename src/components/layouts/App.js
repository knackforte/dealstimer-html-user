import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from '../Signin';
import Signup from '../Signup';
import Forgotpassword from '../Forgotpassword';
import Navigation from '../Navigation';
import Dashboard from '../Dashboard';
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Signin} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Forgotpassword" component={Forgotpassword} />
          <Route path="/Dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
