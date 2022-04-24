import React from 'react'
import { ListGroup } from 'react-bootstrap'
const BookList = ({
   bookList,
   title,
   setTitle,
   author, 
   setAuthor, 
   description, 
   setDescription }) => {
  return (
      <ListGroup>
        {bookList.map((book) => (
          <ListGroup.Item key={book._id} eventKey={book._id} onClick={() => {
            setTitle(book.title)
            setAuthor(book.author)
            setDescription(book.description)
          }}>
            {book.title}, {book.author}, {book.description}
          </ListGroup.Item>
        ))}
      </ListGroup>
  )
}

export default BookList