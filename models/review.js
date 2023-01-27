const mongoose = require("mongoose")

const Schema = mongoose.Schema

const reviewSchema = new Schema({
    rate: {
        type: Number,
        required: false
    },
    comment: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
})

module.exports = reviewSchema