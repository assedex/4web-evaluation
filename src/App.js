import React from 'react';

import './App.css';
//import Dashboard from './Dashboard/Dashboard.container.js';
import Login from './Login/Login.container.js';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

const App =() => (
    <div className="App">
     
     <Router>
       <Route path="/login" component={Login} />
       
     </Router>
    </div>
  );



export default App;
//<Route path="/Dashboard" component={Dashboard} />