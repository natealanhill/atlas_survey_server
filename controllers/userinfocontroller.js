const router = require('express').Router();
const User = require('../db').import('../models/userinfo');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//USER SIGNUP
router.post('/userinfo', function (req, res) {

    UserInfo.create({
        dateOfBirth: req.body.userInfo.dateOfBirth,
        age: req.body.userInfo.age,
        heightInInches: req.bady.userInfo.heightInInches,
        weightInPounds: req.body.userInfo.weightInPounds,
        goal: req.body.userInfo.goal,
        userId: req.user.id
    })
        .then(
            userInfo => res.status(200).json(userInfo)

        ).catch(err => res.status(500).json({ error: err }))
})

//USER SIGNIN

router.get('/getuserinfo', (req, res) => {

    User.findOne({
        where: {
            userId: req.user.id
        }
    })
        .then(function createSuccess(data) {

            res.status(200).json({
                
                message: "User found",
                data: data
            })

        }) .catch (err => res.status(500).json({ error: err }))
    })



module.exports = router;