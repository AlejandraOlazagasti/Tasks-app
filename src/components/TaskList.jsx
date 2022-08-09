import React, { useState } from 'react'
import Form from './Form'
import '../stylesheets/TaskList.css'
import Task from '../components/Task'

const TaskList = () => {

  const [tasks, setTasks] = useState([])

  const addTask = task => {
    console.log(task)
    if (task.text.trim()){
      task.text= task.text.trim();
      const taskUpload = [task, ...tasks];
      setTasks(taskUpload);
    }
  };

  const deleteTask = id => {
    const taskUpload = tasks.filter(task => task.id !== id);
    setTasks(taskUpload);
  };

  const completeTask = id => {
    const taskUpload = tasks.map(task => {
      if(task.id === id){
        task.complete = !task.complete;
      }
      return task;
    });
    setTasks(taskUpload)
  };

  return (
    <>
      <Form onSubmit={addTask}/>
      <div className='task-list-container'>
        {
          tasks.map(task => 
            <Task 
              key={task.id}
              id={task.id}
              text={task.text}
              complete={task.complete}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          )
        }
      </div>
    </>
  )
}

export default TaskList