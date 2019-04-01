import React, { Component } from 'react';
import './App.css';


import Header from './components/header';
import TodoList from './components/todo/';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
       <TodoList />
      </div>
    );
  }
}

export default App;
