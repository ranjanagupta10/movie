"use strict";

const mongoose = require("mongoose");

let URL = 'mongodb+srv://root:root1234@cluster0.skixv.mongodb.net/event';
console.log("url", URL);

module.exports = {
    connectDB: () =>
        mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            readPreference: "secondaryPreferred",
        }),

    disconnectDB: () => mongoose.connection.close(),
};
