import React from "react";

const Addtask = () => {
  return (
    <form className="bg-gray-800 container mx-auto p-10 flex justify-between ">
      <input
        type="text"
        placeholder="what's wrong with you?"
        className=" bg-transparent outline-none border-b-2 border-teal-100/30
          py-2 px-3
          focus:text-teal-600 "
      />
      <button className="bg-gray-500/40 py-2 px-5 rounded-md text-sky-600/80  hover:bg-teal-600/80 hover:text-gray-200/70 font-semibold duration-300">
        Add task
      </button>
    </form>
  );
};

export default Addtask;
