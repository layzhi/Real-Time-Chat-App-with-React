import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import io from "socket.io-client";

import "./App.css";
import "./Login.css";
import MainScreen from "./components/MainScreen";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            submitted: false
        };
    }

    handleChange = e => {
        this.setState({ userName: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.setState({ submitted: true, userName: this.state.userName });
    };

    render() {
        if (this.state.submitted) {
            // Form was submitted, now show the main App
            return <MainScreen userName={this.state.userName} />;
        }
        return (
            <div class="app">
                <div className="container-fluid h-100">
                    <div className="row text-center h-100">
                        <div className="col col-md-12 align-self-center">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Log In</h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="input-group form-group">
                                            <span className="input-group-text">
                                                <i className="fas fa-user" />
                                            </span>
                                            <div className="input-group-prepend" />
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="username"
                                                onChange={e =>
                                                    this.handleChange(e)
                                                }
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="submit"
                                                value="Login"
                                                className="btn float-right btn-danger login_btn"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
