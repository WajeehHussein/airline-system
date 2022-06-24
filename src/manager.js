'use strict';

const events = require("../events");
const { v4: v4 } = require('uuid');
const { faker } = require('@faker-js/faker');

events.on('new-flight', flightArrived);
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
    console.log(`Manager: we’re greatly thankful for the amazing flight, ${flight.Details.pilot}`)
    events.emit("new-flight", flight)
}, 10000)

function flightArrived(payload) {
    setTimeout(() => {
        console.log(`Manager : we’re greatly thankful for the amazing flight, ${payload.Details.pilot} `);
    }, 3000);
}