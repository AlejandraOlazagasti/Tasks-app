import React, { useState } from 'react'
import '../stylesheets/Form.css'
import { v4 as uuidv4 } from 'uuid'

const Form = (props) => {

  const [input, setInput] = useState();

  const handleChange = e =>{
    setInput(e.target.value);
  };

  const handleShipping = e => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      complete: false
    };

    props.onSubmit(newTask);
  };

  return (
    <form 
      className='task-form'
      onSubmit={handleShipping}>
      <input 
        type="text"  
        className='task-input' 
        placeholder='Write your task' 
        name='Text'
        onChange={handleChange}/>
      <button className='task-button'>Add Task</button>
    </form>
  )
}

export default Form