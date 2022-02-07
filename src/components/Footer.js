import React from "react";
import logo from './../logo.svg';
import './../App.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className="App-footer">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Footer
                </p>
            </footer>
        );
    }
}

export default Footer;