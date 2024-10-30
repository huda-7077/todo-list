import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { deleteTodo, toggleIsDone } from "../redux/slices/todo";

const Profile = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todo.todos);
  const handleDelete = (index: number) => {
    dispatch(deleteTodo(index));
  };

  const handleIsDone = (index: number, isDone: boolean) => {
    dispatch(toggleIsDone({ index, isDone }));
  };
  return (
    <div className="h-screen bg-blue-400">
      <div className="container mx-auto space-y-4">
        <h1 className="pt-8 text-center text-4xl font-bold text-white">
          Profile
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
        <Link to="../exercise">Back</Link>
      </div>
    </div>
  );
};

export default Profile;
