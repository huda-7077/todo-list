import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  addTodo,
  deleteTodo,
  toggleIsDone,
  setNewTodo,
} from "../redux/slices/todo";

const ExerciseDay7 = () => {
  const dispatch = useAppDispatch();

  const todos = useAppSelector((state) => state.todo.todos);
  const newTodo = useAppSelector((state) => state.todo.newTodo);

  const handleAddTodo = () => {
    dispatch(addTodo());
  };

  const handleDelete = (index: number) => {
    dispatch(deleteTodo(index));
  };

  const handleIsDone = (index: number, isDone: boolean) => {
    dispatch(toggleIsDone({ index, isDone }));
  };

  const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNewTodo(e.target.value));
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
                    onChange={(e) => handleIsDone(index, e.target.checked)}
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
              onChange={handleNewTodoChange}
              value={newTodo}
            />
            <button className="border px-4 py-2" onClick={handleAddTodo}>
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center text-white">
        <Link className="" to="../profile">
          Check Result
        </Link>
      </div>
    </div>
  );
};

export default ExerciseDay7;
