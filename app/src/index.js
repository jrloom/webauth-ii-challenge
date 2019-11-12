import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { CookieProvider } from "react-cookie";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <CookieProvider>
    <Router>
      <App />
    </Router>
  </CookieProvider>,
  document.getElementById("root")
);
