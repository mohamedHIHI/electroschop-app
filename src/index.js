import React from "react";
import ReactDOM from "react-dom/client";
import ListeProduit from "./listeProduit";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

function App() {
    return (
        <ListeProduit />
    );
}

root.render(<App/>);