"use strict";
const bcrypt = require("bcryptjs");
const MovieCityModel = require("../models/movie.model");
const _ = require("lodash");
const validator = require("./movieValidator");


const movie = async (req, res) => {
    try {
        let data = await validator.movie().validateAsync(req.body);
        const response = await MovieCityModel.create(data);

        return res.json({
            message: `Success`,
            status: 200,
            data: response
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            status: 500,
        });
    }
};
const searchMovie = async (req, res) => {
    try {
        let {
            page,
            limit,
            sorting,
            filter,

        } = await validator.searchMovie().validateAsync(req.body);

        const skip = (page - 1) * limit;

        const sort = sorting === "des" ? { position: -1 } : { position: 1 };

        let filterObj = {};

        if (filter === "cityName") {
            filterObj["cityName"] = new RegExp("^.*" + query, "i");

            const [movieList, count] = await Promise.all([
                MovieCityModel.find(filterObj).sort(sort).skip(skip).limit(limit).lean(),
                MovieCityModel.countDocuments(filterObj),
            ]);

            return res.json({
                code: 200,
                message: "successful",
                count,
                data: movieList,
                error: null,
            });
        }
    } catch (error) {

    }
}


module.exports = {
    movie: movie,
    searchMovie: searchMovie
};
