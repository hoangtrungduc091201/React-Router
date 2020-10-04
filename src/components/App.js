import React,{Component} from 'react';
import { BrowserRouter as Router, Switch,  Route, Link } from "react-router-dom";
import './../css/App.css';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import News from './News';
import NewDetails from './NewDetails';
import Contact from './Contact';
import RoutingURL from './../router/RoutingURL';
class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Nav/>
              <RoutingURL/>
            <Footer/>
          </div>
       </Router>
    );
  }
}

export default App;
