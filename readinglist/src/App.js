import './App.css';
import NewBookForm from './components.js/BookForm';
import Booklist from './components.js/BookList';
import Navbar from './components.js/Navbar';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className='App'>
      <BookContextProvider>
        <Navbar />
        <Booklist />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
