import React, { Component } from "react";
import uuid from "uuid";
import "../MainScreen.css";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

import io from "socket.io-client";

export default class MainScreen extends Component {
    socket = {};
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            messages: []
        };

        this.socket = io("localhost:4000");

        this.socket.on("RECEIVE_MESSAGE", data => {
            console.log(data);
            this.addMessage(data);
        });
    }

    onSubmitMessage = e => {
        e.preventDefault();
        const messageObject = {
            username: this.props.userName,
            message: this.state.message
        };

        this.socket.emit("SEND_MESSAGE", messageObject);

        messageObject.fromMe = true;
        this.addMessage(messageObject);
    };

    addMessage = message => {
        // Append the message to the component state
        const messages = this.state.messages;
        messages.push(message);
        this.setState({ messages: messages, message: "" });
    };

    handlemessage = e => {
        this.setState({ message: e.target.value });
    };
    render() {
        return (
            <div className="container-fluid h-100">
                <div className="row text-center h-100">
                    <div className="col col-md-12 align-self-center">
                        <div id="main-chat-window">
                            <div id="message-section">
                                <div id="output">
                                    <div className="messages">
                                        <Messages
                                            messages={this.state.messages}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <form onSubmit={this.onSubmitMessage}>
                                    <input
                                        id="message"
                                        type="text"
                                        placeholder="Message"
                                        value={this.state.message}
                                        onChange={e => this.handlemessage(e)}
                                        required
                                    />
                                    <div className="p-top">
                                        <button className="btn btn-danger btn-block">
                                            Send
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
