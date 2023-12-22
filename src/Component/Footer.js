import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 container mx-auto p-10 rounded-bl-lg rounded-br-lg border-t-2 border-dashed border-gray-400">
      <p className="capitalize text-center text-sky-500">
        &copy;{new Date().getFullYear()} Todo App All right Reserved here
      </p>
    </div>
  );
};

export default Footer;
