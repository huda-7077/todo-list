import { useAppSelector } from "../redux/hooks";

const Product = () => {
  const counter = useAppSelector((state) => state.counter);
  return (
    <div>
      Product
      <h1>{counter.value}</h1>
    </div>
  );
};

export default Product;
