import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { createTodo, deleteTodo, editTodo } from "../redux/slices/todo2";
// import { Link } from "react-router-dom";

const TodoByLecturer = () => {
  const { todos } = useAppSelector((state) => state.todo2);
  const dispatch = useAppDispatch();

  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    dispatch(createTodo({ title: newTodo, isDone: false }));
    setNewTodo("");
  };

  const handleDelete = (index: number) => {
    dispatch(deleteTodo(index));
  };

  const handleEdit = (index: number, value: boolean) => {
    dispatch(editTodo({ index, value }));
  };

  const getTodosDone = () => todos.filter((todo) => todo.isDone);

  return (
    <div className="h-screen bg-slate-500">
      <div className="container mx-auto space-y-4">
        <h1 className="pt-8 text-center text-4xl font-bold text-white">
          Chores Todo List
        </h1>
        <table className="w-full text-white">
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={(e) => handleEdit(index, e.target.checked)}
                  />
                </td>
                <td>
                  <p className={todo.isDone ? "line-through" : ""}>
                    {todo.title}
                  </p>
                </td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container mx-auto mt-12">
        <div className="flex flex-col items-center justify-center text-white">
          <h2 className="text-xl font-bold">Done: {getTodosDone().length}</h2>
          <div className="space-x-4">
            <input
              type="text"
              className="w-[400px] p-2 text-black"
              onChange={(e) => setNewTodo(e.target.value)}
              value={newTodo}
            />
            <button className="border px-4 py-2" onClick={handleAddTodo}>
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center text-white">
        {/* <Link className="" to="../profile">
          Check Result
        </Link> */}
      </div>
    </div>
  );
};

export default TodoByLecturer;
