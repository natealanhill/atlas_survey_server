const jwt = require('jsonwebtoken'); //import jsonwebtoken 
const User = require('../db').import('../models/admin');

const validateSession = (req, res, next) => {
    const token = req.headers.authorization;
    console.log('token --> ', token);
    if (!token) {
        return res.status(403).send({ auth: false, message: "No token provided" })
    } else {
        jwt.verify(token,process.env.JWT_SECRET, (err, decodeToken) => {
            console.log('decodeToken --> ', decodeToken);
            if (!err && decodeToken) {
                Admin.findOne({
                    where: {
                        id: decodeToken.id
                    }
                })
             .then(admin => {
                console.log('admin -->', admin);
                if (!admin) throw err;
                console.log('req -->', req);
                req.admin = admin;
                return next();
            })
            .catch(err => next(err));
        } else {
            req.errors = err;
            return res.status(500).send("Not Authorized");
            }
        });
    }
};

module.exports = validateSession;