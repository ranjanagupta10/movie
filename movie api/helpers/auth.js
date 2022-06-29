"use strict";
const bcrypt = require("bcryptjs");
const Login = require("../models/login.model");
const _ = require("lodash");

const tokenHelper = require("./token");
const validator = require("./validator");


//
/**
 * todo: lock user if 3 invalid attempts
 * todo: joi request validation
 */
const login = async (req, res) => {
    try {
        const { username, password } = await validator
            .login()
            .validateAsync(req.body);


        let admin = await Login.aggregate([
            { $match: { username: username.trim().toLowerCase() } },

            {
                $project: {
                    _id: 1,
                    // accesses: 1,

                    password: 1,
                    username: 1,

                },
            },
        ]);

        let token = await tokenHelper.generateToken({
            _id: admin._id,
            username: admin.username,

        });
        return res.json({
            message: `Success`,
            status: 200,
            data: _.omit({ ...admin, token }),
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            status: 500,
        });
    }
};
module.exports = {
    login: login,
};
