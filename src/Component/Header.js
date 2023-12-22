import React from "react";
import { LiaReact } from "react-icons/lia";

const Header = () => {
  return (
    <div className="header bg-gray-800 container mx-auto p-10 rounded-tl-lg rounded-tr-lg border-b-2 border-dashed border-gray-400 flex  gap-3">
      <span className="text-teal-600 flex text-center self-center text-2xl">
        <LiaReact />
      </span>
      <span className="text-sky-600 uppercase tracking-wider font-semibold">
        <p>react-todo App</p>
      </span>
    </div>
  );
};

export default Header;
