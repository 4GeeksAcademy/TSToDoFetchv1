import React, { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const apiUrl = "https://playground.4geeks.com/apis/fake/todos/user/TS06";

  const update = (newList) => {
    fetch(apiUrl, {
      method: "PUT",
      body: JSON.stringify(newList),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => {
        console.log(resp.ok);
        console.log(resp.status);
        console.log(resp.text());
        return resp.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const get = () => {
    fetch(apiUrl)
      .then((resp) => resp.json())
      .then((data) => setTasks(data));
  };

  useEffect(() => {
    get();
  }, []);
     

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const newTasks = [...tasks, { "label": newTask, "done": false }];
      setTasks(newTasks);
      update(newTasks);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    update(updatedTasks);
  };

  const handleCleanAllTasks = () => {
    // Send a DELETE request to the server to delete all tasks
    const deleteAll=tasks = [...tasks, { "label": newTask, "done": false }]
    console.log (deleteAll)

    fetch(apiUrl, {
      method: "PUT",
      body: JSON.stringify(tasks),
      headers: {
        "Content-Type": "application/json"
    }})
      .then((resp) => {
        // Update the front-end with an empty task list
        resp.status === 200 ? 
        setTasks(deleteAll):""
      })
      .catch(error => {
        console.log(error);
      });
  };
  console.log(tasks);

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
          <button onClick={handleCleanAllTasks}>Delete</button>
          {tasks.length === 0 ? (
            <div className="no-tasks">No tasks, add a task</div>
          ) : (
            <ul>
              {tasks.map((task, index) => (
                <li key={index} onClick={() => handleDeleteTask(index)}>
                  {task.label}
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
