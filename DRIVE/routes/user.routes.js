const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const userModel = require('../models/user.model');
const user = require('../models/user.model');
const bcrypt = require('bcrypt');

router.get('/register', (req,res)=>{
    res.render("register");
})

router.post('/register',
    body('email').trim().isEmail({min:10}),
    body('password').trim().isLength({min:5}),
    body('username').trim().isLength({min:3}),
    async (req,res)=>{

        const errors = validationResult(req);
        console.log(errors);

    const {email, username, password} = req.body;

    const hashPass = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
        email,
        username,
        password: hashPass
    })

    res.json(newUser);
})

module.exports= router; 