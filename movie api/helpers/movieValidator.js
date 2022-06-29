const Joi = require("@hapi/joi");

module.exports = {
    movie: () => {
        return Joi.object().keys({
            cityName: Joi.string().min(1).required(),
            cinemas: Joi.string().min(1).required(),
        });
    },

    searchMovie: () => {
        return Joi.object().keys({
            page: Joi.number().default(1).min(1),
            sorting: Joi.string().default("des").valid("asc", "des"),
            limit: Joi.number().default(10),
            filter: Joi.string().default("cityName").valid("cityName"),
        });
    },
};
