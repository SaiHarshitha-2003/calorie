import React from 'react';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;