import Taskitem from "./Taskitem";

const Tasklist = ({ tasks, error, loading }) => {
  return (
    <div className=" bg-gray-800 container mx-auto p-10 flex flex-col gap-3">
      {loading ? (
        <p className="text-center">{error ? error : "loading.."}</p>
      ) : (
        tasks.length === 0 && <p className="text-center">no tasks..</p>
      )}

      {tasks.map((task) => (
        <Taskitem task={task} key={task.id} />
      ))}
    </div>
  );
};

export default Tasklist;
