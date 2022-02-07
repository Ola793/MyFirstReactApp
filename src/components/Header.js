import React from "react";
import logo from './../logo.svg';
import './../App.css';

class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Header
                </p>
            </header>
        );
    }
}

export default Header;