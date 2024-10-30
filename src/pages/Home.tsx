import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/slices/counter";
import { useState } from "react";

const Home = () => {
  // melihat isi global state
  const counter = useAppSelector((state) => state.counter);

  // untuk merubah isi global state
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState<number>(0);

  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(inputValue));
    setInputValue(0);
  };

  return (
    <div>
      <button onClick={handleDecrement}>decrement</button>
      <span>{counter.value}</span>
      <button onClick={handleIncrement}>increment</button>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <button onClick={handleIncrementByAmount}>increment by value</button>
      <hr />
      <Link to="./product">link product</Link>
    </div>
  );
};

export default Home;
