import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// SERVICE WORKER
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";

// TO DELETE
import "./index.css";
import "font-awesome/css/font-awesome.min.css";

// ROUTES
import MainRoutes from "./router/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));

// React18
root.render(
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

reportWebVitals();
