import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, toggleComplete, deleteTask, editTask }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
