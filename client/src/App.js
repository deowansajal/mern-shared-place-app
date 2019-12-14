import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/places/new" exact component={NewPlace} />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
