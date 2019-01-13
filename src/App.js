import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter, Redirect,history } from 'react-router-dom';
import LoginForm from './Containers/Login/login';
import Planetsearch from './Containers/Planetsearch/Planetsearch';



class App extends Component {

  
  render() {
    return (
      <BrowserRouter  basename={process.env.PUBLIC_URL}>      
      <Switch>     
      <Route path="/planet-search" component={Planetsearch} />            
      <Route path="/" exact component={LoginForm} />
      </Switch>      
    </BrowserRouter>    
    );
  }
}

export default App;