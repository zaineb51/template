import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Blog from './Layout/Blog';
import Footer from './components/Footer';
import Register from './Layout/Register';
import Login from './Layout/Login';
function App() {
  return (
    <div >
     
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/blog' element={<Blog/>} exact />
        <Route path='/register' element={<Register/>} exact />
        <Route path='/login' element={<Login/>} exact />

      </Routes>
<Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
