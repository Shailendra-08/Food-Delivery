
const express = require('express');
const router = express.Router();
// const food = require('../models/Food.js')

// const Food_Schema = require('../models/Food');

// const food = require('../models/Food')
// const { body, validationResult } = require('express-validator');
const Category = require('../models/Category');

router.post("/getCategory",

// I used a validation of express in the code
async(req,res)=>{
    let store=  await Category.find();
    res.send(store);

})


// console.log("in usermodel")
module.exports = router;