import './App.css';
import Navbar from './components.js/Navbar';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className='App'>
      <BookContextProvider>
        <Navbar />
      </BookContextProvider>
    </div>
  );
}

export default App;
