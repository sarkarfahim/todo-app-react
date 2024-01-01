import React, { useRef, useState } from "react";

const Addtask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");

  const inputTaskRef = useRef(null);
  // add task handler event
  const addTasksHandler = (e) => {
    e.preventDefault();
    ///post data in server
    postingTask(task);

    inputTaskRef.current.blur();
    setTask(" ");
  };

  //posting task data
  const postingTask = async (text) => {
    const res = await fetch("https://ninth-neat-capybara.glitch.me/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  return (
    <form
      className="bg-gray-800 container mx-auto p-10 flex justify-between"
      onSubmit={addTasksHandler}
    >
      <input
        type="text"
        required
        ref={inputTaskRef}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="what's wrong with you?"
        className=" bg-transparent outline-none border-b-2 border-teal-100/30
          py-2 px-3
          focus:text-teal-600 "
      />
      <button
        type="submit"
        className="bg-gray-500/40 py-2 px-5 rounded-md text-sky-600/80  hover:bg-teal-600/80 hover:text-gray-200/70 font-semibold duration-300"
      >
        Add task
      </button>
    </form>
  );
};

export default Addtask;
