import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import { GlobalStyle } from "./style.js";
import Header from "./common/header/index";
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
