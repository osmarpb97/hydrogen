import React, { Component } from 'react';
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom' 
import './App.css';
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css';
import  Navbar from './Components/Dashboard/Layout/Navbar'
import Dashboard from './Components/Dashboard/Dashboard'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard}/>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
