import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import ExerciseDay7 from "./pages/ExerciseDay7";
import TodoByLecturer from "./pages/TodoByLecturer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<Product />} />
        <Route path="/exercise" element={<ExerciseDay7 />} />
        <Route path="/todo" element={<TodoByLecturer />} />
      </Routes>
    </>
  );
}

export default App;
