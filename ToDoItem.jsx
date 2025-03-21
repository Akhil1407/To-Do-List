import { useState } from "react";

function ToDoItem({ task, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  return (
    <li className="flex justify-between items-center p-3 mb-2 bg-gray-100 border rounded-lg shadow-md transition hover:bg-gray-200">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      ) : (
        <span
          onClick={() => toggleComplete(task.id)}
          className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : "text-gray-800"} transition`}
        >
          {task.text}
        </span>
      )}

      <div className="flex items-center space-x-2">
        {isEditing ? (
          <button
            onClick={() => {
              editTask(task.id, newText);
              setIsEditing(false);
            }}
            className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition"
          >
            Edit
          </button>
        )}
        <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition">
          Delete
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
