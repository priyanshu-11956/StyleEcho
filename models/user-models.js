const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    fullname : String,
    email : String,
    password : String,
    cart:[],
    isadmin : Boolean,
    orders : [],
    contact : Number,
    picture : String,
})
module.exports = mongoose.model("User",UserSchema);
