import React,{Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import './../css/App.css';
import Nav from './Nav';
import Footer from './Footer';
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
