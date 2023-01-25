// require Express
const express = require('express')
const { requireToken } = require("../config/auth")
const { handle404 } = require('../lib/custom-errors')

// require the Model we just created
const Book = require('../models/book')

// Creating a router for us to make paths on
const router = express.Router()

// INDEX
// GET /books
router.get('/books', requireToken, (req, res, next) => {
	Book.find()
		.then((books) => {
			return books.map((book) => book)
		})
		.then((books) => res.status(200).json({ books: books }))
		.catch(next)
})

// SHOW
// GET /books/5a7db6c74d55bc51bdf39793
router.get('/books/:id', requireToken, (req, res, next) => {
	// req.params.id will be set based on the `:id` in the route
	Book.findById(req.params.id)
		.then(handle404)
		.then((book) => res.status(200).json({ book: book }))
		.catch(next)
})

// CREATE
// POST /books
router.post('/books', (req, res, next) => {
	Book.create(req.body.book)
		.then((book) => {
			res.status(201).json({ book: book })
		})
		.catch(next)
})

// UPDATE
// PATCH /books/5a7db6c74d55bc51bdf39793
router.patch('/books/:id', (req, res, next) => {
	Book.findById(req.params.id)
		.then(handle404)
		.then((book) => {
			return book.updateOne(req.body.book)
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})

// DESTROY
// DELETE /books/5a7db6c74d55bc51bdf39793
router.delete('/books/:id', (req, res, next) => {
	Book.findById(req.params.id)
		.then(handle404)
		.then((book) => {
			book.deleteOne()
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})

// exporting the router to use elsewhere
module.exports = router