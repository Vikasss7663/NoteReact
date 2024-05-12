import React, { useEffect, useState } from 'react';
import TodoItem from '../components/TodoItem';
import { Link } from 'react-router-dom';

function TodoList() {
  const [list, setList] = useState([]);

  // Load list from local storage
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('todos'));
    if (storedList) {
      setList(storedList);
    }
  }, []);

  // Function to handle deleting an item from the list
  const handleDelete = (itemToDelete) => {
    const finalNotes = list.filter(item => item !== itemToDelete);
    localStorage.setItem('todos', JSON.stringify(finalNotes));
    setList(list.filter(item => item !== itemToDelete));  // Update state by filtering out the item
  };

  return (
    <div style={styles.container}>
      <Link to="/add" style={styles.link}>Add Note</Link>
      {list.map((item, index) => (
        <TodoItem key={index} item={item} onDelete={handleDelete}/>
      ))}
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    animation: 'fadeIn 0.5s ease-in-out'
  },
  link: {
    display: 'inline-block',
    padding: '10px 15px',
    margin: '10px 0',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#007bff',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s'
  }
};

// Insert the keyframes for fadeIn effect
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}`, styleSheet.cssRules.length);

export default TodoList;
