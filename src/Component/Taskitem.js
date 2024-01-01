import React, { useContext } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { DeleteTaskHandler, EditTaskHandler } from "../App";

const Taskitem = ({ task, editTask, setEditTask, editTaskSubmitter }) => {
  const deleteHandler = useContext(DeleteTaskHandler);
  const editHandler = useContext(EditTaskHandler);
  return (
    <div className="taskItem flex justify-between p-5 bg-gradient-to-r from-orange-100/30 to-sky-700/35 rounded-lg text-center text-gray-200 hover:bg-teal-600/40 duration-300 hover:font-semibold ">
      <div className="left flex gap-3 ">
        <span>
          <input type="checkbox" />
        </span>
        {task.isEditable && (
          <form onSubmit={(e) => editTaskSubmitter(e, task.id)}>
            <input
              className="bg-transparent outline-none
              border-b pb-1 ps-2 focus:border-sky-500"
              type="text"
              required
              value={editTask}
            />
          </form>
        )}

        {!task.isEditable && (
          <p className=" text-sky-700 hover:text-gray-100/50">{task.text}</p>
        )}
      </div>

      <div className="right flex self-center gap-3">
        <button
          onClick={() => editHandler(task.id)}
          className="text-teal-700 hover:text-gray-100/50 duration-300 cursor-pointer "
        >
          <FiEdit />
        </button>
        <button
          onClick={() => deleteHandler(task.id)}
          className="text-gray-100/40 hover:text-red-600/50 duration-300  cursor-pointer"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default Taskitem;
