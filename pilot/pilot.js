"use strict";
require("dotenv").config();

const client = require('socket.io-client');
// let mainHost = `http://localhost:${process.env.PORT}`
let host = `http://localhost:${process.env.PORT}/airline`  //3000/airline

const airLineConnection = client.connect(host);
const { v4: v4 } = require("uuid");
let id = v4()
airLineConnection.emit("get-all");

airLineConnection.on("new-flight", (flight) => {
    // console.log('111111111111111111111111111');
    setTimeout(() => {
        flight.events = "took_off";
        console.log(`Pilot: flight with ID ${flight.Details.flightID} took-off`);
        // console.log(flight);
        airLineConnection.emit('took-off', flight);
    }, 4000);
});

airLineConnection.on("new-flight", (flight) => {
    // console.log('222222222222222222222222222222222');
    setTimeout(() => {
        flight.events = "arrived";
        console.log(`Pilot: flight with ID ${flight.Details.flightID} has arrived`);
        airLineConnection.emit('arrived', flight)
    }, 3000);
});

//////////////// lab 13
airLineConnection.on("new-flight", (flight) => {
    console.log("pilot messege queue")
    // console.log({ flight })
    console.log(`Pilot:Sorry i didn't catch this flight ID ${id}`);
    airLineConnection.emit("delete", flight)
});