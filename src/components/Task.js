import React from "react";

export const Task = ({task, handleTask, ...props}) => {

    const ActionBtn = () =>
        <div className='action-btn'
             onClick={handleTask}>
            {!task.done ? <p data-done='yes'>Да!</p> :
                <div>
                    <p data-done='yes'>Не удалять!</p>
                    <p data-done='not'>Удалить!</p>
                </div>
            }
        </div>


    const className = 'task ' + (task.done ? 'task-done' : '')

    return <div className={className}>
        {task.title}
        <ActionBtn/>
    </div>
}

