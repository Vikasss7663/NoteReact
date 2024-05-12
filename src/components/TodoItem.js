import React from 'react';

function TodoItem(props) {
    const { item, onDelete } = props; // Destructure item from props
    return (
        <div style={styles.container}>
            <p style={styles.itemText}>{item}</p>
            <button style={styles.deleteButton} onClick={() => onDelete(item)}>
                Delete
            </button>
        </div>
    );
}

const styles = {
    container: {
        padding: '10px 15px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
        backgroundColor: '#f9f9f9'
    },
    itemText: {
        margin: 0
    },
    deleteButton: {
        padding: '6px 10px',
        fontSize: '14px',
        color: '#fff',
        background: '#f44336',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    }
};

export default TodoItem;
