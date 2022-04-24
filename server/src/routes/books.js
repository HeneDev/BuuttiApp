const router = require("Express").Router()
const Book = require("../models/Book")

// Create new Book
router.post("/", async (req, res) => {
    const newBook = new Book(req.body)
    try {
        const savedBook = await newBook.save();
        res.status(200).json(savedBook)
    } catch(err) {
        res.status(500).json(err)
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

module.exports = router;