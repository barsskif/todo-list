import React from 'react';
import ReactDOM from 'react-dom'
import TodoFlag from './TodoFlag'
import Header from './Header'

import "../index.css"



function MyApp() {
  return (
    <div div className="todo-list">
    <Header />
    <TodoFlag />
    <TodoFlag />
    <TodoFlag />
    </div>
  );
}

export default MyApp;
