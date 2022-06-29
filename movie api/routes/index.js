const authController = require("../helpers/auth");
const movieCity = require('../helpers/city')

module.exports = (app) => {
    app.get("/", (req, res) => {
        res.send({ status: 200, message: `Welcome` });
    });
    app.post("/login", authController.login);
    app.post('/city', movieCity.movie)
    app.post('/city/find', movieCity.searchMovie)
}

