const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter a name'],
    },
    email:{
        type:String,
        required:[true,'Please enter an email'],
        lowercase:true,
        unique: true
    },
    description:{
        type:String,
        maxlength:[150,'Maximum character length is 150 characters'],
        required:true
    },
    age:{
        type:Number,
        maxlength:[99,'You have entered an invalid age.'],
        required:true
    },
    hobbie:{
        type:String,
        required:true
    }
    })

const User = mongoose.model('User', userSchema);

module.exports = User;