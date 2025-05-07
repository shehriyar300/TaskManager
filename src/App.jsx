import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddTask from "./pages/AddTask";
import MyTask from "./pages/MyTask";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [Local, setLocal] = useState(() => {
    // İlk açılışda localStorage-dan oxu
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    return storedTasks ? storedTasks : [];
  });

  const handleAddTask = (task) => {
    setLocal((prevTasks) => {
      const updatedTasks = prevTasks.some((t) => t.id === task.id)
        ? prevTasks.map((t) => (t.id === task.id ? task : t))
        : [...prevTasks, task];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<div><MyTask /></div>} />
        <Route path="/add_task" element={<AddTask onAddTask={handleAddTask} />} />
        <Route path="/add_task/:id" element={<AddTask onAddTask={handleAddTask} />} />
      </Routes>
    </Router>
  );
}

export default App;
