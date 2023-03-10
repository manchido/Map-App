const mongoose = require('mongoose')

const PinSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        
    },
    title: {
        type: String,
        require: true,
        min: 3

    }, 
    desc: {
        type: String,
        require: true,
        min: 3
    },
    rating: {
        type: Number,
        require: true,
        min: 0,
        max: 5,
    },
    lat: {
        type: Number,
        required: true
    },
    long: {
        type: Number,
        required: true
    },
    
}, {timestamps: true})


module.exports = mongoose.model("Pin", PinSchema)