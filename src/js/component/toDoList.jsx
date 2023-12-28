import React, { useState} from 'react';

function ToDoList () {
    const [listTasks, setListTasks] = useState([]);
    const [inputPlaceholder, setInputPlaceholder] = useState("No tasks, add a task");

    return(
        <div>
            <div className="card rounded-0">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item px-5">
                        <input
                            type="text" className="toDoListInput w-100" placeholder={inputPlaceholder}
                            onKeyUp={(e) =>{
                            if (e.key === "Enter"){
                                setListTasks(listTasks.concat({ label: e.target.value}));
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
                            <span className="img-show-on-hover" onClick={(e)=>{
                                console.log(listTasks.indexOf(t));
                                let newListTasks = [];
                                for (let item of listTasks){
                                    if (item != t){
                                        newListTasks.push(item);
                                    }
                                }
                                setListTasks(newListTasks);
                                if(listTasks.length == 1){
                                    setInputPlaceholder("No tasks, add a task");
                                }
                            }}>&times;</span>
                        </li>))
                    }
                    <li className="list-group-item list-item-counter"><small>{listTasks.length} item left</small></li>
                </ul>
            </div>
            <div className="rounded-0 card list-bottom-deco-1 m-auto"></div>
            <div className="rounded-0 card list-bottom-deco-2 m-auto"></div>
        </div>
    );
}

export default ToDoList;