'use strict';
require('dotenv').config()
// const events = require("../events");
const { v4: v4 } = require('uuid');
const { faker } = require('@faker-js/faker');

const client = require('socket.io-client');
let host = `http://localhost:${process.env.PORT}/`  /// http://localhost:3000/
// let host2 = `http://localhost:${process.env.PORT}/airline`

const mainConnection = client.connect(host)
const airLineConnection = client.connect(`${host}airline`)

airLineConnection.on('new-flight', (payload) => {
    setTimeout(() => {
        console.log(`Manager : we’re greatly thankful for the amazing flight, ${payload.Details.pilot} `);
    }, 7000);
});


setInterval(() => {
    let flight =
    {
        events: "new-flight",
        time: new Date().toLocaleString(),
        Details: {
            airLine: 'Royal Jordanian Airlines',
            flightID: v4(),
            pilot: faker.name.findName(),
            destination: faker.address.cityName()
        },
    }
    // console.log('////////flight//////////');

    console.log(`Manager: new flight with ID ${flight.Details.flightID} have been scheduled`)
    mainConnection.emit("new-flight", flight)
}, 10000)





