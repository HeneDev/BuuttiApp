import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./App.css"
import BookForm from './components/Form/BookForm'
import BookList from "./components/BookList/BookList"
import bookService from './services/BookData'
const App = () => {
  const [bookList, setBookList] = useState([])
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")


  useEffect(() => {
    const retrieveBooks = async() => {
      try {
        const response = await bookService.retrieveAllBooks()
        setBookList(response)
      } catch(err) {
        console.log("Error: ", err)
      }
    }
    retrieveBooks()
  }, [])
  return (
    <Container>
      <Row>
        <Col>
        <BookForm 
        bookList={bookList}
        setBookList={setBookList}
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        description={description}
        setDescription={setDescription}/>
        </Col>
        <Col className="bookCol">
        <BookList 
        bookList={bookList}
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        description={description}
        setDescription={setDescription} />
        </Col>
      </Row>
    </Container>
  )
}

export default App