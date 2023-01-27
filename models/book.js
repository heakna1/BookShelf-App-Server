const mongoose = require('mongoose')
const reviewSchema = require('./review')

const Schema = mongoose.Schema

const bookSchema = new Schema(
	{
		title: {
			type: String,
			required: true
		},
		author: {
			type: String,
			required: true
		},
        genre: {
			type: String,
			required: true
		},
        pageNumber: {
            type: Number,
            require: false
        },
        reviews: [reviewSchema]
	},
	{
        timestamps: true
    }
)

// mongosh collection characters
const Book = mongoose.model('Book', bookSchema)

module.exports = Book