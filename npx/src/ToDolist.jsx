import React, { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState(['Eat breakfast', 'Walk the dog', 'workout', 'waslk'])
    const [newTask, setNewTask] = useState('')

    function inputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== '' && !tasks.includes(newTask.trim())) {
            setTasks(t => [...t, newTask]);
            setNewTask('');
        }

    }
    function removeTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function taskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }
    function taskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }


    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div className="newtask">
                <input id="newtask-input" type="text" placeholder="Enter a task" value={newTask} onChange={inputChange} />
                <button className='add-button' onClick={addTask}>Add</button>
            </div>
            <div className="tasks-list">
                <ol>
                    {tasks.map((task, index) =>
                        <>
                            <li key={index} >
                                <span className="text">{task}</span>
                                <button className="move-button task-up-button" onClick={() => taskUp(index)}>⬆️</button>
                                <button className="move-button task-down-button" onClick={() => taskDown(index)}>⬇️</button>
                                <button className="remove-task-button" onClick={() => removeTask(index)}>🗑️</button>
                            </li>
                        </>
                    )}
                </ol>
            </div>
        </div>
    )

}

export default ToDoList