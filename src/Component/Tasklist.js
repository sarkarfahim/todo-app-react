import Taskitem from "./Taskitem";

const Tasklist = () => {
  return (
    <div className=" bg-gray-800 container mx-auto p-10 flex flex-col gap-3">
      <Taskitem />
      <Taskitem />
    </div>
  );
};

export default Tasklist;
