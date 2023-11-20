import React, { useState } from 'react';
// import './../styles/index.css'; // Import the provided CSS file

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const apiUrl= https://playground.4geeks.com/apis/fake/todos/user/TS06
  const add apiUrl
  const update apiUrl
  const delete apiUrl

  fetch(apiUrl, {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        console.log(resp.text()); // will try return the exact result as string
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is where your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
    });

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1>To Do's</h1>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a task"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddTask();
            }
          }}
        />
      <div>  
        <button onClick={handleAddTask}>Add</button>
        {tasks.length === 0 ? (
          <div className="no-tasks">No tasks, add a task</div>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <li key={index} onMousePress={() => handleDeleteTask(index)}>
                {task}
                <span
                  className="delete-icon"
                  onClick={() => handleDeleteTask(index)}
                >
                  &#10006;
                </span>
              </li>
            ))}
            <div className='task-length'> items left {tasks.length}</div>
          </ul>
        )}
      </div>  
      </div>
    </div>
  );
}

export default App;
