const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const db = require('./config/db')
const PORT = 2000

const requestLogger = require('./lib/request-logger')
const bookRoutes = require("./routes/book_routes")
const reviewRoutes = require("./routes/review_routes")
const userRoutes = require("./routes/user_routes")

// deprecation warning
mongoose.set('strictQuery', true)

// creates the connection between your local MongoDB and this express app
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// starting an express app
const app = express()

app.use(cors({ origin: `http://127.0.0.1:5500` }))

app.use(express.json())
app.use(requestLogger)

// server needs to know about these routers
app.use(bookRoutes)
app.use(reviewRoutes)
app.use(userRoutes)

app.listen(PORT, () => {
    console.log('listening on ' + PORT)
})

module.exports = app