const mongoose = require('mongoose');
const { Schema } = mongoose;

const Category_Schema = new Schema({
    CategoryName:{
        type: String,
        required:true
    }

});
console.log("in schems")
module.exports = mongoose.model('categories',Category_Schema);