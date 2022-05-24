import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import About from './pages/About';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
