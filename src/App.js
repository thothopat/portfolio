import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header.js';
import About from './components/About.js';
import Career from './components/Career.js';
import Projects from './components/Projects.js';

/*function App() {
  return (
    <div>
      <h1>Hallo World</h1>
    </div>
  );
}*/
const App = () => (
    <>
      <Header />
      <About />
      <Career />
      <Projects />
    </>
  );
export default App;
