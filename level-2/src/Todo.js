import React, { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [pendingTasks, setPendingTasks] = useState([]);

  const addTask = (task, description) => {
    const newTask = {
      id: new Date().getTime(),
      text: task,
      description: description,
      startDate: new Date().toLocaleString(),
      endDate: null,
    };

    setTasks([...tasks, newTask]);
    setPendingTasks([...pendingTasks, newTask]);
  };

  const completeTask = (taskId) => {
    const completedTask = tasks.find((task) => task.id === taskId);

    if (completedTask) {
      const updatedCompletedTask = {
        ...completedTask,
        endDate: new Date().toLocaleString(),
      };

      setCompletedTasks([...completedTasks, updatedCompletedTask]);
      setPendingTasks(pendingTasks.filter((task) => task.id !== taskId));
      setTasks(tasks.map((task) => (task.id === taskId ? updatedCompletedTask : task)));
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    setCompletedTasks(completedTasks.filter((task) => task.id !== taskId));
    setPendingTasks(pendingTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <div className="container mx-auto flex flex-col h-screen">
        <div className="w-1/3">
          <h1 className="text-4xl font-bold mb-4 mt-12">To-Do List</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const task = e.target.task.value;
              const description = e.target.description.value; 
              addTask(task, description);
              e.target.task.value = '';
              e.target.description.value = '';
            }}
          >
            <input
              type="text"
              name="task"
              placeholder="Add a Task"
              className="p-2 outline-none mb-2 w-3/4 bg-black border-b-2 text-white"
            />
            <input
              type="text"
              name="description"
              placeholder="Add a Description"
              className="p-2 mb-2 outline-none w-3/4 bg-black border-b-2 text-white"
            /><br></br>
            <button type="submit" className="bg-blue-500 text-white p-2 w-3/4 rounded-xl">
              Add Task
            </button>
          </form>
        </div>
        <div className="w-2/3 -mt-44 overflow-y-auto ml-auto">
          <div>
            <h2 className="text-2xl font-bold mb-4 ml-8">Pending Tasks</h2>
            <ul>
              {pendingTasks.map((task) => (
                <li key={task.id} className="mb-2 ml-8">
                  <span>
                    {task.text}<br></br>
                    {task.description} ---
                    {task.startDate}
                  </span>
                  <button
                    onClick={() => completeTask(task.id)}
                    className="ml-2 bg-green-500 text-white p-1"
                  >
                    Complete
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="ml-2 bg-red-500 text-white p-1"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 ml-8">Completed Tasks</h2>
            <ul>
              {completedTasks.map((task) => (
                <li key={task.id} className="mb-2 ml-8">
                  <span>
                    {task.text}<br></br>{task.startDate} --- {task.endDate}
                  </span>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="ml-2 bg-red-500 text-white p-1"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
