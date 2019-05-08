const express = require("express");
const socket = require("socket.io");

const app = express();
const server = app.listen(4000, () => {
    console.log("Listening to port 4000.");
});

// Socket Setup
var io = socket(server);

io.on("connection", socket => {
    console.log("Made socket connection: " + socket.id);
    socket.on("chat", data => {
        console.log("Message is recieved!");
    });

    socket.on("SEND_MESSAGE", function(data) {
        socket.broadcast.emit("RECEIVE_MESSAGE", data);
    });
});
