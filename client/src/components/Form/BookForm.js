import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import bookService from '../../services/BookData'

const BookForm = ({ 
    bookList,
    setBookList,
    title,
    setTitle,
    author,
    setAuthor,
    description,
    setDescription }) => {

    const onTitleChange = (newTitle) => {
        setTitle(newTitle)
    }

    const onAuthorChange = (newAuthor) => {
        setAuthor(newAuthor)
    }

    const onDescriptionChange = (newDescription) => {
        setDescription(newDescription)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            const newBookObject = {
                title: title,
                author: author,
                description: description
            }

            const newBook = await bookService.addNewBook(newBookObject)

            // After initializing the new object, reset all properties
            setTitle("")
            setAuthor("")
            setDescription("")

            const newList = []
            newList.push(...bookList, newBook)
            setBookList(newList)
        } catch(err) {
            console.log("Error: ", err)
        }
    }
    const handleBookDeletion = async(e) => {
        e.preventDefault()
        
        const bookToDelete = bookList.find(book => book.title == title && book.author == author)
        await bookService.deleteBook(bookToDelete._id)

        setBookList(bookList.filter((book) => {
            return book._id != bookToDelete._id
        }))

        setTitle("")
        setAuthor("")
        setDescription("")
    }


  return (
    <Form>
    <Form.Group className="mb-3">
      <Form.Label>Title</Form.Label>
      <Form.Control 
      type="text"
      placeholder="Enter title"
      value={title ?? ""}
      onChange={(event) => onTitleChange(event.target.value)}
      required />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Author</Form.Label>
      <Form.Control 
      type="text"
      placeholder="Enter author"
      value={author ?? ""}
      onChange={(event) => onAuthorChange(event.target.value)}
      required  />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Description</Form.Label>
      <Form.Control 
      type="text"
      placeholder="Enter description"
      value={description ?? ""}
      onChange={(event) => onDescriptionChange(event.target.value)}
      required  />
    </Form.Group>

    <Button variant="primary" type="button" onClick={handleSubmit}>  
      Save New
    </Button>{' '}
    <Button variant="secondary" type="button">
      Save
    </Button>{' '}
    <Button variant="danger" type="button" onClick={handleBookDeletion}>
      Delete
    </Button>
  </Form>
  )
}

export default BookForm