import React from "react";
import ReactDOM from "react-dom/client";
import MyApp from "./App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <MyApp />
    </React.StrictMode>
);
