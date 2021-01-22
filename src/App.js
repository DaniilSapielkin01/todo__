import React, {useState} from "react";
import {Task} from "./components/Task";
import {TaskInput} from "./components/TaskInput";


export const App = () => {
    const [tasks, setTasks] = useState(
        [
            {id: Date.now(), title: "Таск выполнен №1 ?", done: false},
            {id: Date.now() + 1, title: "Таск выполнен  №2 ?", done: true},
            {id: Date.now() + 2, title: "Таск выполнен  №3 ?", done: true}

        ]
    )

    const editTask = (id) => {
        setTasks((tasks) =>
            tasks.map((task) =>
                task.id === id ? {...task, done: !task.done} : task
            )
        );
    }

    const handleTask = (id, e) => {
        let done = e.target.getAttribute('data-done')
        if (done === "yes") {
            editTask(id)

        } else if (done === 'not') {
            setTasks(tasks =>
                tasks.filter(task => task.id !== id)
            )
        }
    }

    const addTask = (task) => {
        console.log(task)
        let copy = [...tasks]
        copy = [...copy, {id: Date.now() + 1, title: task, done: false}]
        setTasks(copy)
    }

    const activeTask = tasks.filter(task => !task.done)
    const doneTasks = tasks.filter(task => task.done)

    return <div className="App">
        <div className='top'>
            <h3>Active tasks: {activeTask.length}</h3>
        </div>
        <TaskInput addTask={addTask}/>
        {[...activeTask, ...doneTasks].map(task =>
            <Task key={task.id} task={task} handleTask={handleTask.bind(this, task.id)}/>
        )}
    </div>
};
