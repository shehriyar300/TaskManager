import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css';
function MyTask() {
  const [tasks, setTasks] = useState([]);
  useParams();

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);
let taskEdit=(id)=>{
    return (e) => {
      e.preventDefault();
      const task = tasks.find((task) => task.id === id);
      if (task) {
        localStorage.setItem("task", JSON.stringify(task));
      }
    };

}
  return (<>
      <h1 className='mytask_h1'>My Tasks</h1>
    <div className="my_task">
      
      <ol className="task_list">
        {tasks.map((task) => (
          <li key={task.id}>
            <div>
            <h2>{task.name}</h2>
            <p>{task.description}</p>
            </div>
            <button className='btn' onClick={taskEdit(task.id)}>
            <Link to={`/add_task/${task.id}`}>Edit</Link>
                
            </button>
          </li>
        ))}
      </ol>
    </div></>
  );
}

export default MyTask;
