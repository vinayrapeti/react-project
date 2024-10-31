import React from 'react';

function ToDoItem({ task, toggleComplete, deleteTask }) {
    return (
        <li>
            <span
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                onClick={() => toggleComplete(task.id)}
            >
                {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    );
}

export default ToDoItem;
