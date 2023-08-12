const express = require('express');
const router = express.Router();
const user = require('../models/Users')
const { body, validationResult } = require('express-validator');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const jwtSecret = "Mynameisayushmahadule";


router.post("/createuser",

// I used a validation of express in the code

body('email').isEmail(),
body('name').isLength({min:5}),
body('password','Incorrect Password').isLength({min:5})


,async(req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()})
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password,salt);

    
    try {
        // console.log(req.body);
//        await user.create({
//             name:"ayush",
//             password:"123456",
//             email:"ayush@gmail.com",
//             location:"India"
//         })
//     console.log('in try')
// res.json({success:true});

        req.body.password = secPassword;
    const data = await user.create(
        req.body
    )
    console.log(data);
        res.status(200).json({message:"Data Inserted"});
        
    } catch (error) {
        res.status(400).json({message:error.message});
    }

})

//login User

router.post("/loginuser",

body('email').isEmail(),
body('password','Incorrect Password').isLength({min:5}),

// I used a validation of express in the code
async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()})
    }
    const email = req.body.email;
    try {

       let userData = await user.findOne({email});

       if(!userData){
        return res.status(400).json({error :" Try logging in with correct credentials"});
       }

       const pwdCompare = await bcrypt.compare(req.body.password,userData.password);

       if(!pwdCompare){
        return res.status(400).json({error :" Try logging in with correct Password"});
       }

       const data = {
        user:{
            id:userData.id
        }
       }
       const authToken = jwt.sign(data,jwtSecret);

       return res.json({success:true,authToken:authToken});

 
        
    } catch (error) {
        res.status(400).json({message:error.message});
    }

})

// console.log("in usermodel")
module.exports = router;