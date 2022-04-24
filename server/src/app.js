const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
require("dotenv").config()

// Routes
const bookRoute = require("./routes/books")

const app = express()
app.use(express.json())

// Connect to MongoDB
mongoose
.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongoDB connected")
})
.catch((err) => {
    console.log("Error: " + err)
})

app.use(cors())
app.use("/api/books", bookRoute)

// Start the server
app.listen(process.env.PORT, () => {
    console.log("Server running on port", process.env.PORT)
})