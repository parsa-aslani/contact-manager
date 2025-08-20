import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// router
import { BrowserRouter } from "react-router-dom";
// alert
import "react-confirm-alert/src/react-confirm-alert.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
