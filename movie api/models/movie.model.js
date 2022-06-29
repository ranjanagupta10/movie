const mongoose = require("mongoose");


const MovieCitySchema = new mongoose.Schema(
    {
        cityName: { type: String, trim: true, required: true },
        cinemas: [{ type: String, required: true }],
    },
);


const MovieCityModel = mongoose.model("movie", MovieCitySchema);

module.exports = MovieCityModel;
