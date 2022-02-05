import { useContext } from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Service from './components/Service';
import { ThemeContext } from './context';
import logo from './logo.svg';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {


  return (
    <Router>
    
      <Nav />
        <Switch>
      <Route exact  path ="/">
        <Home />
      </Route>
      <Route   path ="/service">
        <Service />
      </Route>   
      <Route   path ="/projects">
        <Projects />
      </Route>   
      <Route   path ="/contact">
        <Contact />
      </Route>
      </Switch>
      <Footer/>
    </Router>

  );
}

export default App;
