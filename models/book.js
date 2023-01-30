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
        isbn: {
            type: Number,
            required: true
        },
        pageNumber: {
            type: Number,
            require: false
        },
        bookCover: {
            type: String,
            required: false,
            default: "",
        },
        reviews: [reviewSchema]
	},
	{
        timestamps: true,
        virtuals: true
    }
); 
// http://covers.librarything.com/devkey/d73fa640c8f15f511af41c39a6965f49
// /small/isbn/

// mongosh collection characters
const Book = mongoose.model('Book', bookSchema)

module.exports = Book