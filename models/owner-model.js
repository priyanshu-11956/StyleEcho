const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    fullname : {
        type : String,
        min : 3,
    },
    email : String,
    password : String,
    Products : [],
    gstin : String,
    picture : String,
})
module.exports = mongoose.model("User",UserSchema);
