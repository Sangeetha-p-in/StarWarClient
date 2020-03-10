import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Databutton from "./Databutton.js";
import Amplify from "aws-amplify"
import awsmobile from "./aws-exports"
Amplify.configure(awsmobile)

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Databutton />
            </header>
        </div>
    );
}

export default App;
