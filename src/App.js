import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import LoginForm from './Containers/Login/login';
import Planetsearch from './Containers/Planetsearch/Planetsearch';



class App extends Component {

  
  render() {
    return (
      <BrowserRouter>      
      <Switch>     
      <Route path="/login" component={LoginForm} />
      <Route path="/planet-search" component={Planetsearch} />            
      </Switch>      
    </BrowserRouter>    
    );
  }
}

export default App;