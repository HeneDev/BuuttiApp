import React from 'react'
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
    setDescription,
    selectedBook,
    setSelectedBook}) => {

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
            console.log(newBook)
            // After initializing the new object, reset all properties
            setTitle("")
            setAuthor("")
            setDescription("")
            setSelectedBook([])

            // React way to updating lists
            const newList = []
            newList.push(...bookList, newBook)
            setBookList(newList)
        } catch(err) {
            console.log("Error: ", err)
        }
    }

    const handleBookUpdate = async(e) => {
      e.preventDefault()
      const newBook = {
        title: title,
        author: author,
        description: description
      }
      const updatedBook = await bookService.updateBook(selectedBook._id, newBook)

      // Map through booklist and replace the old book
      setBookList(bookList.map(book => {
        return book._id === selectedBook._id ? book = updatedBook : book
      }))
    }

    const handleBookDeletion = async(e) => {
        e.preventDefault()
        
        const bookToDelete = bookList.find(book => book.title === title && book.author === author)
        await bookService.deleteBook(bookToDelete._id)

        setBookList(bookList.filter((book) => {
            return book._id !== bookToDelete._id
        }))

        setTitle("")
        setAuthor("")
        setDescription("")
        setSelectedBook([])
    }

    const isBookSelected = () => {
      return selectedBook.length === 0 ? true : false 
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
      as="textarea" 
      type="text"
      placeholder="Enter description"
      value={description ?? ""}
      onChange={(event) => onDescriptionChange(event.target.value)}
      required  />
    </Form.Group>

    <Button variant="primary" type="button" onClick={handleSubmit}>  
      Save New
    </Button>{' '}
    <Button variant="secondary" disabled={isBookSelected()} type="button" onClick={handleBookUpdate} >
      Save
    </Button>{' '}
    <Button variant="danger" disabled={isBookSelected()} type="button" onClick={handleBookDeletion}>
      Delete
    </Button>
  </Form>
  )
}

export default BookForm