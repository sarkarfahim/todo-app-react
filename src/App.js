import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Addtask from "./Component/Addtask";
import Tasklist from "./Component/Tasklist";

const App = () => {
  return (
    <div className="wrapper bg-gradient-to-t from-gray-800 to-sky-800  min-h-screen text-xl text-gray-100 py-10 flex flex-col">
      <Header />
      <Addtask />
      <Tasklist />
      <Footer />
    </div>
  );
};

export default App;
