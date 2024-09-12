import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "../Tag/Tag";

const TaskForm = () => {
  // const[task,setTask] = useState("")
  // const[status,setStatus]=useState("todo")

  // const handleTaskChange =(e)=>{
  //   setTask(e.target.value);
  // }
  // const handleStatusChnage=(e)=>{
  //   setStatus(e.target.value);
  // }
  // console.log(status);

  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags:[]
  });
  const selectTag = ()=>{


  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return {...prev,[name]: value};
    });
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(taskData);

  }

  return (
    <div>
      <header className="app_header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="task_input"
            placeholder="Enter Your Task"
            name="task"
            onChange={handleChange}
          />
          <div className="task_form_bottom_line">
            <div>
              <Tag tagName="HTML" select/>
              <Tag tagName="CSS" />
              <Tag tagName="Java Script" />
              <Tag tagName="React" />
            </div>
            <div>
              <select
                className="task_status"
                onChange={handleChange}
                name="status"
              >
                <option value="todo">To Do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>
              <button type="submit" className="task_submit">
                + Add Task
              </button>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
};

export default TaskForm;
