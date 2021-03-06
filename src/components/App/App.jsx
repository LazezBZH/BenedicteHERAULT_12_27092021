import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Header from "../Header/Header";
//import Aside from "../Aside/Aside";
import Home from "../../pages/Home/Home";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Settings from "../../pages/Settings/Settings";
import Network from "../../pages/Network/Network";
import Error from "../../pages/Error/Error";
import "./App.css";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user/:id" component={Dashboard} />
          <Route path="/settings" component={Settings} />
          <Route path="/network" component={Network} />
          <Route component={Error} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
