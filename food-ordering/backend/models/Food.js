const mongoose = require('mongoose');
const { Schema } = mongoose;

const Food_Schema = new Schema({
    CategoryName:{
        type: String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    options:[],
    description:{
        type:String,
        required:true
    }

});
console.log("in schems")
module.exports = mongoose.model('food-items',Food_Schema);