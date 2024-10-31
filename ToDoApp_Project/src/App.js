import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);

    const toggleComplete = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));

    return (
        <div className="App">
            <Header addTask={addTask} />
            <ToDoList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
        </div>
    );
}

export default App;
