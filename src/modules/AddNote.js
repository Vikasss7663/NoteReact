import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddNote() {
  const [note, setNote] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingNotes = JSON.parse(localStorage.getItem('todos')) || [];
    const finalNotes = JSON.stringify([...existingNotes, note]);
    console.log(finalNotes);
    localStorage.setItem('todos', finalNotes);
    navigate(-1); // Navigate back to the home page after saving
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.headline}>Add a New Note</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={note}
          onChange={handleChange}
          placeholder="Enter a new note"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Save Note</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
    animation: 'fadeIn 1s ease'
  },
  headline: {
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
    animation: 'slideInFromLeft 1s ease'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px',
    padding: '20px',
    boxSizing: 'border-box'
  },
  input: {
    fontSize: '16px',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  button: {
    fontSize: '16px',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

// Keyframes for animations
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`, styleSheet.cssRules.length);
styleSheet.insertRule(`@keyframes slideInFromLeft {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}`, styleSheet.cssRules.length);


export default AddNote;
