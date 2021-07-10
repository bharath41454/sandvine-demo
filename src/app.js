import React from "react";
import ReactDOM from "react-dom";
import { Dashboard } from "./pages/Dashboard";
import "./app.less";

const App = () => (
  <React.Fragment>
    <Dashboard />
  </React.Fragment>
);
ReactDOM.render(<App />, document.getElementById("root"));
