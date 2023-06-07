import './App.css';
import Navbar from './Component/HomePage/UI/Navbar/Navbar';
import HomePage from './Component/HomePage/HomePage';
import BookShow from './Component/BookShow/BookShow';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MovieContextProvider from './Context/MovieContextProvider';


const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/bookshow', element: <BookShow /> }
])
function App() {

  return (
    <MovieContextProvider>
      <Navbar />
      <RouterProvider router={router} />
    </MovieContextProvider>
  );
}

export default App;
