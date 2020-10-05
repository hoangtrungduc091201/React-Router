import React, { Component } from 'react';
import { BrowserRouter as Router, Switch,  Route, Link } from "react-router-dom";
import Home from './../components/Home';
import News from './../components/News';
import NewDetails from './../components/NewDetails';
import Contact from './../components/Contact';

class RoutingURL extends Component {
    render() {
        return (
             
             <div>

                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/news" component={News}/>
                    <Route exact path="/newdetails/:slug.:id.html" component={NewDetails}/>
                    <Route exact path="/contact" component={Contact}/>

             </div>
          
        );
    }
}

export default RoutingURL;