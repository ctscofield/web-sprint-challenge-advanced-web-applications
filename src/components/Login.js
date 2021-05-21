import { axiosWithAuth } from "./../helpers/axiosWithAuth";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { push } = useHistory();

  const handleChange = (e) => {
    e.persist();
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  }

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then(res => {
      console.log(res);
      setError("");
      window.localStorage.setItem("token", JSON.stringify(res.data.payload));
      push("protected");
      })
      .catch(err => {
        console.log(err);
        setError("incorrect Username or Password");
      })
  }

  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });
  
  const [error, setError] = useState("");

  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Login Here</h2>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="username"
            data-testid="username"
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="password"
            data-testid="password"
          />
          <button>Submit</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.