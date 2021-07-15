import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import themeObj from "./Theme";
import { ThemeProvider } from "styled-components";



ReactDOM.render(
<ThemeProvider theme={themeObj}>
    <App /> 
</ThemeProvider>,
document.getElementById("root"));
