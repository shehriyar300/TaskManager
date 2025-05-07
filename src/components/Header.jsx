import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
function Header() {
    const navigate = useNavigate();
    const handleAddTask = () => {
        navigate("/add_task");
    };
  return (
    <>
      <div className="header">
        <h1>Task Manager</h1> <button className="btn" onClick={handleAddTask}>Add Task</button>
      </div>
    </>
  );
}

export default Header;
