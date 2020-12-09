import React, { createContext, useState } from 'react';
const { v1: uuidv1 } = require('uuid');

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: 'name of the wind', author: 'patrick roftfuss', id: 1 },
    { title: 'nutuk', author: 'Mustafa Kemal Atatürk', id: 2 },
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv1() }]);
  };
  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
