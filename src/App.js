import React, { createContext, useEffect, useState } from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Addtask from "./Component/Addtask";
import Tasklist from "./Component/Tasklist";

export const DeleteTaskHandler = createContext();
export const EditTaskHandler = createContext();

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editTask, setEditTask] = useState("");
  const [toggleEditMode, setToggleEditMode] = useState(true);

  useEffect(() => {
    fetchingTasks();
  }, []);

  const fetchingTasks = async () => {
    try {
      const res = await fetch("https://ninth-neat-capybara.glitch.me/tasks");
      if (!res.ok) throw new Error("something went wrong ");
      const data = await res.json();
      setTasks(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  //delete event
  const deleteHandler = (id) => {
    //delete task server
    deleteTasks(id);

    //realTimeUpdate
    setTasks(tasks.filter((task) => id !== task.id));
  };

  const deleteTasks = async (id) => {
    await fetch(`https://ninth-neat-capybara.glitch.me/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  //edit handler event

  const editHandler = (id) => {
    //target el
    const [editableTask] = tasks.filter((task) => id === task.id);
    //add new property
    editableTask.isEditable = true;
    setEditTask(editableTask.text);
    setTasks([...tasks]);
    setToggleEditMode(false);

    //re-arrange
    tasks
      .filter((task) => id !== task.id)
      .map((targetedEl) => (targetedEl.isEditable = false));
  };

  //onsubmit btn

  const editTaskSubmitter = (e, id) => {
    e.preventDefault();
    setToggleEditMode(!toggleEditMode);
    //update object
    const editNewData = {
      text: editTask,
      id: id,
    };
    //putting data in server
    puttingEditedData(id, editNewData);
    ///realtime update ui
    const [editableTask] = tasks.filter((task) => id === task.id);
    editableTask.isEditable = false;
    editableTask.text = editNewData.text;
    setTasks([...tasks, editableTask]);
  };

  const puttingEditedData = async (id, NewData) => {
    await fetch(`https://ninth-neat-capybara.glitch.me/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(NewData),
    });
  };

  return (
    <div className="wrapper bg-gradient-to-t from-gray-800 to-sky-800  min-h-screen text-xl text-gray-100 py-10 flex flex-col ">
      <DeleteTaskHandler.Provider value={deleteHandler}>
        <EditTaskHandler.Provider value={editHandler}>
          <Header />
          <Addtask tasks={tasks} setTasks={setTasks} />
          <Tasklist
            tasks={tasks}
            error={error}
            loading={loading}
            editTask={editTask}
            setEditTask={setEditTask}
            editTaskSubmitter={editTaskSubmitter}
          />
          <Footer />
        </EditTaskHandler.Provider>
      </DeleteTaskHandler.Provider>
    </div>
  );
};

export default App;
