import React, { Component } from "react";
import Message from "./Message";

export default class Messages extends Component {
    render() {
        // Loop through all the messages in the state and create a Message component
        const messages = this.props.messages.map((message, i) => {
            return (
                <Message
                    key={i}
                    userName={message.username}
                    message={message.message}
                    fromMe={message.fromMe}
                />
            );
        });

        return (
            <div className="messages" id="messageList">
                {messages}
            </div>
        );
    }
}
