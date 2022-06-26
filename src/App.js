// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryForm from './components/CategoryForm';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <CategoryForm/>
    </div>
  );
}

export default App;
