const router = require('express').Router();
const Admin = require('../db').import('../models/admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//USER SIGNUP
router.post('/register', function (req,res){

    Admin.create({
        username: req.body.user.username,
        password: bcrypt.hashSync(req.body.user.password, 13)
    })
    .then(
        function createSuccess(user) {

            let token = jwt.sign({id: user.id,username: user.username}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});

        res.json({
            user: user,
            message: 'User successfully created!',
            sessionToken: token
        });
        }
    ) .catch(err => res.status(500).json({error:err}))
});

//USER SIGNIN

router.post('/login', function(req,res){
    
    Admin.findOne({
        where: {
            username: req.body.user.username
        }
    }) 
        .then(function loginSuccess(user) {            
            if (user) {

                bcrypt.compare(req.body.user.password, user.password, function (err, matches) {
                    if(matches) {
                        let token = jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24})
                    
                        res.status(200).json({
                            user: user,
                            message: "User successfully logged in!",
                            sessionToken: token
                        })
                
        } else {
            res.status(502).json({ error: 'Login failed'});
        }
        });
    } else {
        res.status(500).json({error: "User does not exist."})
    }
}) .catch(err => res.status(500).json({error:err}))
});


module.exports = router;