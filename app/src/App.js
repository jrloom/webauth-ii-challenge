import React from "react";
import { withCookies } from "react-cookie";

import Login from "./Forms/Login";
import Register from "./Forms/Register";
import Router from "./Utils/Router";

import "./App.css";

function App() {
  return (
    <div>
      <Register />
      <Login />
      <Router />
    </div>
  );
}

export default withCookies(App);
