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
            type: String,
            required: true
        },
        bookCover: {
            type: String,
            required: false,
            default: "https://covers.openlibrary.org/b/isbn/"
        },
        reviews: [reviewSchema]
	},
	{
        timestamps: true,
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    }
);

bookSchema.virtual('bookCoverUrl').get(function() {
    return this.bookCover + this.isbn + "-M.jpg";
  });

// mongosh collection books
const Book = mongoose.model('Book', bookSchema)

module.exports = Book