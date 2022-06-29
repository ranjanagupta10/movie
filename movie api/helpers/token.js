var jwt = require('jsonwebtoken');
const fs = require('fs');
var privateKey = fs.readFileSync('./jwtRS256.key');
var cert = fs.readFileSync('./jwtRS256.key.pub'); // get public key

module.exports = {
    generateToken: (payload) => {
        return new Promise((resolve, reject) => {
            jwt.sign(
                payload,
                privateKey,
                {
                    expiresIn: '12h',
                    algorithm: 'RS256',
                },
                function (err, token) {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(token);
                }
            );
        });
    },
    verifyToken: (token) => {
        return new Promise((resolve, reject) => {
            jwt.verify(token, cert, { algorithms: ['RS256'] }, function (
                err,
                decoded
            ) {
                if (err) {
                    return reject(err);
                }

                return resolve(decoded);
            });
        });
    },
};
