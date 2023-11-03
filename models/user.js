const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter a name'],
        unique:true,
    },
    email:{
        type:String,
        required:[true,'Please enter an email'],
        unique:true,
        lowercase:true,
    },
    description:{
        type:String,
        maxlength:[150,'Maximum character length is 150 characters'],
        unique:true,
    },
    age:{
        type:Number,
        maxlength:[99,'You have entered an invalid age.'],
        unique:true,
    },
    hobbie:{
        type:String,
        unique:true,
    }
    })

const User = mongoose.model('User', userSchema);

module.exports = User;