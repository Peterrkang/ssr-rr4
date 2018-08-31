import React, { Component, Fragment } from "react";
import routes from "./routes";
import { Route, Switch } from "react-router-dom";
import NoMatch from "./NoMatch";
import Navbar from "./NavBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Switch>
          {routes.map(({ path, exact, component: C, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={props => <C {...props} {...rest} />}
            />
          ))}
          <route render={props => <NoMatch {...props} />} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
