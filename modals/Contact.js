const mongoose = require("mongoose");

const ContactScema = new mongoose.Schema({
    firstName:{
        type: String,
    },
    lastName:{
        type: String,
    },
    email:{
        type: String,
        required:true,
    },
    city:{
        type: String,
    },
    state:{
        type: String,
    },
    zip:{
        type:String
    },

    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = Contact = mongoose.model('contact', ContactScema)
