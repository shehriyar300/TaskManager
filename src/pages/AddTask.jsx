import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link} from "react-router-dom";
function AddTask({ onAddTask }) {
  const { id } = useParams();
  const [taskId, setTaskId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (id) {
      // Redaktə rejimi
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const foundTask = tasks.find((task) => task.id === id);
      if (foundTask) {
        setTaskId(foundTask.id);
        setName(foundTask.name);
        setDescription(foundTask.description);
      }
    } else {
      // Yeni task rejimi
      const newId = crypto.randomUUID();
      setTaskId(newId);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { id: taskId, name, description };
    onAddTask(task); // App.jsx-də Local və localStorage-də yazılır
  };
  const navigate = useNavigate(); 
  let btnr=()=>{
    
    navigate("/");
  }

  return (
    <div className="card">
      <h1 className="add_h1">{id ? "Edit Task" : "Add New Task"}</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form_params">
          <label htmlFor="taskName">Task Name:</label>
          <input
            type="text"
            id="taskName"
            name="taskName"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form_params">
          <label htmlFor="taskDescription">Task Description:</label>
          <textarea
            id="taskDescription"
            name="taskDescription"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form_params">
          <button type="submit" onClick={btnr}>{id ? "Update Task" : "Submit"}</button>
        </div>
        <div className="form_params">
          <button className="btn">
            <Link to="/">Back</Link>
          </button>
        </div>
      </form>
    </div>  
  );
}

export default AddTask;
