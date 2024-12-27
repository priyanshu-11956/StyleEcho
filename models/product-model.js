const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/");
const ProductSchema = mongoose.Schema({
    name : String,
    discount : {
        type: Number,
        default : 0,
    },
    price : Number,
    bgcolor : String,
    panelcolor : String,
    textcolor : String,
    picture : String,
})
module.exports = mongoose.model("Product",ProductSchemaSchema);
