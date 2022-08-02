import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from "./Home/index";
import Todo from './Todos/todo';
import RestAPI from './RestAPI/index'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo' element={<TodoApp />} />
          <Route path='/restapi' element={<RestAPI />} />
        </Routes>
      </Router>
    </div>
  );
}


function TodoApp() {
  return <div>
    <Todo />
  </div>;
}



export default App;
