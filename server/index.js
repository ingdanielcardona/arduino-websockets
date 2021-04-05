const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(express.static(__dirname + "/public"));

server.listen(3000, function () {
    console.log("Server listening on http://localhost:3000");
});

// Serial communication
const SerialPort = require("serialport");
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort("COM4", {
    baudRate: 9600,
});

const parser = port.pipe(new Readline({ delimeter: "\r\n" }));

parser.on("open", () => {
    console.log("conecction is opened");
});

parser.on("data", (data) => {
    let temp = parseFloat(data);
    //console.log(temp);
    io.emit("temp", temp);
});

port.on("error", () => {
    console.log(err);
});
