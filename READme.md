# ShelfBuddi
Does your large collection of books overwhelm you? Do you want to read your unread books before buying more? ShelfBuddi can help you achieve your reading goals. This app allows you to log your book collection into one place to categorize and organize as you read through your book shelf.

## Technologies Used
* JavaScript
* NPM
* Cors
* Bcrypt
* Express
* Jsonwebtoken
* Mongoose
* Passport
* Passport-jwt
* Open Library

## ERD

!["ERD"](Images/ERD.png)

## Routes Table

|   NAME   |    PATH      |  HTTP VERB  |            PURPOSE           |
| -------- | ------------ | ----------- | ---------------------------- |
| Create   |  /books      |   POST      | Creates a new book           |
| Index    |  /books      |   GET       | Displays all made books      |
| Show     |  /books/:id  |   GET       | Shows specific book by ID    |
| Update   |  /books/:id  |   PATCH     | Updates specific book by ID  |
| Destroy  |  /books/:id  |   DELETE    | Deletes specific book by ID  |
| Create   |  /review      |   POST      | Creates a new review           |
| Index    |  /review      |   GET       | Displays all made reviews      |
| Show     |  /review/:reviewid  |   GET       | Shows specific review by ID    |
| Update   |  /review/:reviewid  |   PATCH     | Updates specific review by ID  |
| Destroy  |  /review/:reviewid  |   DELETE    | Deletes specific review by ID  |
