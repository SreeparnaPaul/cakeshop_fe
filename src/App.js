// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryForm from './components/CategoryForm';
import Header from './components/Header';
import {BrowserRouter,Switch,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Switch>
      <Route exact path='/categoryForm'>
      <CategoryForm/>
      </Route>
      </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
