const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.get('/register', (req,res)=>{
    res.render("register");
})

router.post('/register',
    body('email').trim().isEmail({min:10}),
    body('password').trim().isLength({min:5}),
    body('username').trim().isLength({min:3}),
    (req,res)=>{

        const errors = validationResult(req);
        console.log(errors);

    console.log(req.body);
    console.log("user registered");
})

module.exports= router;