"use-strict"

import React from 'react';
import Router, { Route, Link, DefaultRoute, RouteHandler } from "react-router";

import Landing from './pages/landing.jsx';
import DashBoard from './pages/dashboard.jsx';

const App = React.createClass({
  render() {
    return (
      <div>
        <p>This is Application</p>
        <p><Link to="landing">Landing</Link></p>
        <p><Link to="dashboard">Dashboard</Link></p>

        <RouteHandler/>
      </div>
    );
  }
});

export default App;

// setup routes
const routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="landing" handler={Landing} />
    <Route name="dashboard" handler={DashBoard} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
