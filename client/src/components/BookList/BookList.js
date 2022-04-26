import React from 'react'
import { ListGroup } from 'react-bootstrap'
const BookList = ({
   bookList,
   setTitle, 
   setAuthor, 
   setDescription,
   selectedBook,
   setSelectedBook }) => {
     
  return (
      <ListGroup>
        {bookList.map((book) => (
          <ListGroup.Item 
          key={book._id}
          eventKey={book._id} 
          active={selectedBook === book ? true : false} 
          onClick={() => {
            setTitle(book.title)
            setAuthor(book.author)
            setDescription(book.description)
            setSelectedBook(book)
          }}>
            <b>{book.title}</b> by <b>{book.author}</b>
          </ListGroup.Item>
        ))}
      </ListGroup>
  )
}

export default BookList