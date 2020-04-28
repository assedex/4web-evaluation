import React from 'react';

import './App.css';
import Tab from './Tab/Tab.js';
import Login from './Login/Login.container.js';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

const App =() => (
    <div className="App">
     
     <Router>
       <Link to="/login" style={{'margin-left': '100px'}}>Se connecter</Link>
       <Route path="/login" component={Login} />
       <Route path="/Tab" component={Tab} />
     </Router>
    </div>
  );



export default App;
