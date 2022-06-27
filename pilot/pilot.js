"use strict";
require("dotenv").config()
// require("../manager/manager");
// const events = require("../events");

const client = require('socket.io-client');
let host = `http://localhost:${process.env.PORT}/`

const mainConnection = client.connect(host);
mainConnection.on("new-flight", (flight) => {
    // console.log('111111111111111111111111111');
    setTimeout(() => {
        flight.events = "took_off";
        console.log(`Pilot: flight with ID ${flight.Details.flightID} took-off`);
        // console.log(flight);
        mainConnection.emit('took-off', flight);
    }, 4000);
});

mainConnection.on("new-flight", (flight) => {
    // console.log('222222222222222222222222222222222');
    setTimeout(() => {
        flight.events = "arrived";
        console.log(`Pilot: flight with ID ${flight.Details.flightID} has arrived`);
        // console.log(flight);
        mainConnection.emit('arrived', flight)
    }, 3000);
});
