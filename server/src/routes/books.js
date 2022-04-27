const router = require("express").Router()
const { body, validationResult } = require("express-validator")
const Book = require("../models/Book")

// Create new Book
router.post("/add",
//Title, author or description must not be empty
 body("title").notEmpty(),
 body("author").notEmpty(),
 body("description").notEmpty(),
 async (req, res) => {
    try {
         // Errors, if validation fails
        const errors = validationResult(req)
        // If validation contains errors, return
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        } 

        // Otherwise continue
        const newBook = new Book(req.body)
        const savedBook = await newBook.save();
        res.status(200).json(savedBook)
    } catch(err) {
        res.status(500).json( { message: err.message })
    }
})

// Get all Books
router.get("/", async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).json(books)
    } catch(err) {
        res.status(500).json(err)
    }
})

// Modify a book
router.put("/update/:id", async(req, res) => {
    try {
        const id = req.params.id
        const newBook = req.body
        let bookToUpdate = await Book.findById(id)

        //Update the books fields
        bookToUpdate.title = newBook.title
        bookToUpdate.author = newBook.author
        bookToUpdate.description = newBook.description

        //Save the updated book
        await bookToUpdate.save()
        res.status(200).json(bookToUpdate)
    } catch(err) {
        res.status(500).json(err)
    }
})

// Remove a book by id
router.delete("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id
        const book = await Book.findByIdAndRemove(id)
        res.status(200).json(book)
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router;