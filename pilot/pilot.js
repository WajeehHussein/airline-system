"use strict";
require("dotenv").config();

const client = require('socket.io-client');
// let host2 = `http://localhost:${process.env.PORT}/`
let host = `http://localhost:${process.env.PORT}/airline`  //3000/airline

const mainConnection = client.connect(host);
// const Connection = client.connect(host2);


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
    }, 7000);
});
