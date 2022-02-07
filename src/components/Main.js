import React from "react";
import logo from './../logo.svg';
import './../App.css';

class Main extends React.Component {
    render() {
        return (
            <main className="App-main">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Main block
                </p>
            </main>
        );
    }
}

export default Main;