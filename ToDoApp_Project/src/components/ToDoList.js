import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ tasks, toggleComplete, deleteTask }) {
    return (
        <ul>
            {tasks.map(task => (
                <ToDoItem
                    key={task.id}
                    task={task}
                    toggleComplete={toggleComplete}
                    deleteTask={deleteTask}
                />
            ))}
        </ul>
    );
}

export default ToDoList;
