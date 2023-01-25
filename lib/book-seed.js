const express = require('express')

const Book = require('../models/book')

const router = express.Router()

const startBooks = [
	{
		title: 'Brave New World',
		author: 'Aldous Huxley',
		genre: "Dystopian"
	}
]

router.get('/books', (req, res, next) => {
	Book.deleteMany({})
        .then(() => {
            Book.create(startBooks)
                .then((books) => res.status(200).json({ books: books }))
        })
        .catch(next)
})

module.exports = router