import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";

function App() {
  const logout = () => {
    window.localStorage.removeItem("token");
  };

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a onClick={logout} data-testid="logoutButton" href="#">logout</a>
        </header>
        <PrivateRoute exact path="/protected" component={BubblePage} />
        <Route exact path="/login" component={Login} />
        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.