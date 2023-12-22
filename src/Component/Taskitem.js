import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const Taskitem = () => {
  return (
    <div className="taskItem flex justify-between p-5 bg-gradient-to-r from-orange-100/30 to-sky-700/35 rounded-lg text-center text-gray-200 hover:bg-teal-600/40 duration-300 hover:font-semibold group">
      <div className="left flex gap-3  ">
        <span>
          <input type="checkbox" />
        </span>

        <p className="group text-sky-700 hover:text-gray-100/50">learn react</p>
      </div>

      <div className="right flex self-center gap-3">
        <span className="text-teal-700 hover:text-gray-100/50 duration-300 cursor-pointer">
          <FiEdit />
        </span>
        <span className="text-gray-100/40 hover:text-red-600/50 duration-300  cursor-pointer">
          <MdDelete />
        </span>
      </div>
    </div>
  );
};

export default Taskitem;
