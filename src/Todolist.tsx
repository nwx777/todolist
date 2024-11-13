import React from 'react';
import {TaskType} from "./App";
import {Button} from "./components/Button";
type TodolistProps = {
    tasks: Array<TaskType>
    title: string
}

export const Todolist = ({title, tasks}: TodolistProps) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title={'+'}/>
            </div>
            {
                tasks.length === 0
                    ? <p>No tasks</p>
                    : <ul>
                        {tasks.map((task) => {
                            return (
                                <li key={task.id}>
                                    <input type="checkbox" checked={task.isDone}/>
                                    <span>{task.title}</span>
                                    <Button title={'x'}/>
                                </li>
                            )
                        })}
                    </ul>
            }
            <div className='actionButtons'>
               <Button title={'All'}/> {/*<button>All</button>*/}
               <Button title={'Active'}/> {/*<button>All</button>*/}
               <Button title={'Completed'}/> {/*<button>All</button>*/}
                {/*<button>Active</button>*/}
                {/*<button>Completed</button>*/}
            </div>
        </div>
    );
};