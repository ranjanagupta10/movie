const mongoose = require("mongoose");


const LoginSchema = new mongoose.Schema(
    {
        name: { type: String, trim: true, required: true },
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },

    },
    {
        timestamps: true,
    }
);


const LoginModel = mongoose.model("Login", LoginSchema);

module.exports = LoginModel;
