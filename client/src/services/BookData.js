import axios from 'axios'

const baseUrl = "http://localhost:3001/api/books"

const retrieveAllBooks = async() => {
    const response = await axios.get(baseUrl)
    return response.data
}

const addNewBook = async(newBook) => {
    const response = await axios.post(baseUrl + "/add", newBook)
    return response.data
}

const updateBook = async(id, updatedBook) => {
    const response = await axios.put(baseUrl + "/update/" + id, updatedBook)
    return response.data
}

const deleteBook = async(id) => {
    const response = await axios.delete(baseUrl + "/delete/" + id)
    return response.data
}

export default {
    retrieveAllBooks, addNewBook, updateBook, deleteBook
}