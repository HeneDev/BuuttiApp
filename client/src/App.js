import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BookForm from './components/Form/BookForm'
import BookList from "./components/BookList/BookList"
import bookService from './services/BookData'
const App = () => {
  const [bookList, setBookList] = useState([])
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const [selectedBook, setSelectedBook] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const retrieveBooks = async() => {
      try {
        setLoading(true)
        const response = await bookService.retrieveAllBooks()
        setBookList(response)
      } catch(err) {
        console.log("Error: ", err)
      }
    }
    setLoading(false)
    retrieveBooks()
  }, [])

  return (
    <Container>
      <Row>
        <Col style={{paddingTop:"70px"}}>
        <BookForm 
        bookList={bookList}
        setBookList={setBookList}
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        description={description}
        setDescription={setDescription}
        selectedBook={selectedBook}
        setSelectedBook={setSelectedBook}/>
        </Col>
        <Col style={{paddingTop:"100px"}}>
        <BookList 
        bookList={bookList}
        loading={loading}
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        description={description}
        setDescription={setDescription}
        selectedBook={selectedBook}
        setSelectedBook={setSelectedBook} />
        </Col>
      </Row>
    </Container>
  )
}

export default App