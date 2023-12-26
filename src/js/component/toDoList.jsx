import React, { useState, useEffect } from 'react';

function ToDoList () {
    const listTasksClassname = "list-group-item px-5";
    const [listTasks, setListTasks] = useState([]);
    const [numberOfTasks, setNumberOfTasks] = useState(0);
    const [inputPlaceholder, setInputPlaceholder] = useState("No tasks, add a task");
    return(
        <div>
            <div className="card">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item px-5">
                        <input
                            type="text" className="toDoListInput w-100" placeholder={inputPlaceholder}
                            onKeyUp={(e) =>{
                            if (e.key === "Enter"){
                                setListTasks(listTasks.concat({ label: e.target.value}));
                                setNumberOfTasks(numberOfTasks+1);
                                setInputPlaceholder("What needs to be done?");
                            }
                            }}
                        />
                    </li>
                    {
                        listTasks.map(t => (
                        <li className="list-group-item px-5 d-flex">
                            <div className="w-100">
                                {t.label}
                            </div>
                            <span onClick={(e)=>{
                                setNumberOfTasks(numberOfTasks-1);
                                e.target.parentNode.parentNode.removeChild(e.target.parentNode);
                                if(numberOfTasks === 0){
                                    setInputPlaceholder("No tasks, add a task");
                                }
                            }}>&times;</span>
                        </li>))
                    }
                    <li className="list-group-item list-item-counter"><small>{numberOfTasks} item left</small></li>
                </ul>
            </div>
            <div className="card list-bottom-deco-1 m-auto"></div>
            <div className="card list-bottom-deco-2 m-auto"></div>
        </div>
    );
}

export default ToDoList;