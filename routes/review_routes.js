const express = require('express')
const router = express.Router()

// require book model
const Book = require('../models/book')
const { handle404 } = require('../lib/custom-errors')
const { requireToken } = require("../config/auth")

// CREATE
// POST /reviews/
router.post('/reviews', requireToken ,(req, res, next) => {
	const bookId = req.body.review.bookId

    const review = req.body.review
    //adding an owner field
    review.owner = req.user._id

    //find Book I want to add the review to
    //once found, "push" review into Mongoose Array
    //send status of 201 created if success
    //next if failure
	Book.findById(bookId)
		.then(handle404)
		.then((book) => {
			book.reviews.push(review)

            //have to save the doc when modified
			return book.save()
		})

		.then(book => {
            res.status(201).json({ book: book})
        })
		.catch(next)
})

//UPDATE
//PATCH/reviews/:id
router.patch("/reviews/:reviewId", (req, res, next) => {
    const bookId = req.body.review.bookId

    const reviewBody = req.body.review

    Book.findById(bookId)
        .then(handle404)
        .then(book => {
            const review = book.reviews.id(req.params.reviewId)

            review.set(reviewBody)

            return book.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

//DELETE
//DELETE/reviews/:reviewId
router.delete("/reviews/:reviewId", (req, res, next) => {
    const bookId = req.body.review.bookId

    Book.findById(bookId)
    .then(handle404)
    .then(book => {
        //finding correct review to remove
        //.remove() we delete it
        book.reviews.id(req.params.reviewId).remove()

        book.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router