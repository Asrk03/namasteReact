import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement(
    "h1",
    {
        id : "title",
        hello : "world"
    },
    "Hello World"
);
root.render(heading);