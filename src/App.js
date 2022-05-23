import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Loader from './components/Loader';

function App() {
  return (
    <>
      <Loader />
      <Header />
      <Home />
    </>
  );
}

export default App;
