import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './modules/TodoList';
import AddNote from './modules/AddNote';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<AddNote />} />
      </Routes>
    </Router>
  );
}

export default App;
