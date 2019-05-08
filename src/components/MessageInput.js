/* import React, { Component } from "react";

export default class MessageInput extends Component {
    constructor(props) {
        super(props);
        this.state = { message: "" };
    }
    handlemessage = e => {
        this.setState({ message: e.target.value });
    };

    sendMessage = ev => {
        ev.preventDefault();

        this.setState({ message: "" });

        this.props.onSubmitMessage(this.state.message);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.sendMessage}>
                    <input
                        id="message"
                        type="text"
                        placeholder="Message"
                        value={this.state.message}
                        onChange={e => this.handlemessage(e)}
                    />
                    <div className="p-top">
                        <button className="btn btn-danger btn-block">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
 */
