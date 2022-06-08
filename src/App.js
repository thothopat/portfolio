import './App.css';
import { BrowserRouter as Router, Routes, Switch, Route, Link } from 'react-router-dom';
import { useState } from "react";
import { auth } from "./config/Firebase.config";
import Header from './components/Header.js';
import About from './components/About.js';
import Career from './components/Career.js';
import Projects from './components/Projects.js';
import Login from './components/Login.js';
import EditPost from './components/EditPost.js';

/*function App() {
  return (
    <div>
      <h1>Hallo World</h1>
    </div>
  );
}*/
const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <Router>
      <nav className="block">
        <Link to="/">Home</Link>
        {isAuth ? (
          <>
            <Link to="/career"><span className="inline-block text-gray-800 hover:text-gray-600 mr-4">Career</span></Link>
            <Link to="/education"><span className="inline-block text-gray-800 hover:text-gray-600 mr-4">Education</span></Link>
            <Link to="/projects"><span className="inline-block text-gray-800 hover:text-gray-600 mr-4">Projects</span></Link>
          </>
        ):(
          <Link to="/login"><span className="inline-block px-4 py-2 leading-none border rounded text-gray-600 border-gray-600 hover:text-gray-900 hover:border-gray-900">Login</span></Link>
        )}  
      </nav>
      <Routes>
        <Route path="/" element={<About isAuth={isAuth} />} />
          <Route path="/editPost" element={<EditPost isAuth={isAuth} />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
    </Router>
  )
};
export default App;
