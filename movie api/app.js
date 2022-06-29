const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Set up the express app
const app = express();

var corsOptions = {
    origin: process.env.FRONTEND_URL,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./routes")(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get("*", (req, res) =>
    res.status(200).send({
        message: "Welcome to movies Api",
    })
);

module.exports = app;
