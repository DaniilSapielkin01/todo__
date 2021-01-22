import React, {useState} from 'react'

export const TaskInput = ({addTask}) => {
    const [input, setInput] = useState('')

    const handleTask = (e) => {
        let val = input.trim()
        if (val) {
            addTask(input)
            setInput('')
        }
    }
    const inputChange = (e) => {
        const value = e.target.value
        setInput(value)
    }

    const handleEnter = (e) => {
        if (e.key === "Enter") handleTask(e)
    }

    return <div className='task-input'>
        <input onChange={inputChange} onKeyPress={handleEnter} value={input}/>
        <button onClick={handleTask}>Добавить</button>
    </div>
}
