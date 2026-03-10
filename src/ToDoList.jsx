import React, {useState} from 'react'


function ToDoList(){
    
    const [tasks, setTasks] = useState(["Eat"]);
    const [newtask, setNewTask] = useState("");

    function handleInputChange(e){
        setNewTask(e.target.value);
    }

    function addTask(){
        if(newtask.trim() !== ""){
            setTasks(t => [...t, newtask]);
            setNewTask("");
        }
        
    }

    function deleteTask(index){
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index -1 ],updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index + 1 ],updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    return(
        <div className = "to-do-list">

            <h1>To-Do-List</h1>
            <input type="text" placeholder='Enter To-Do-List' value={newtask} onChange={handleInputChange} ></input>
            <button className="add-button" onClick={addTask}>Add</button>
            


            <ol>
            {tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                    <button className="up-button" onClick={() => moveTaskUp(index)}>UP</button>
                    <button className="down-button" onClick={() => moveTaskDown(index)}>Down</button>
                </li>
            )}
            </ol>
        </div>

        
    );
}

export default ToDoList