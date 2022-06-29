const Joi = require("@hapi/joi");

module.exports = {
    login: () => {
        return Joi.object().keys({
            username: Joi.string().min(1).required(),
            password: Joi.string().min(1).required(),
        });
    },
};
