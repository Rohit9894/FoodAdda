import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./redux/counter/counter.slice";
import { addTodo } from "./redux/todo/todo.slice";
import Navbar from "./components/Navbar";
import CategoryMenu from "./components/CategoryMenu";
import FoodItem from "./components/FoodItem";

function App() {
  const count = useSelector((state) => state.counter.value);
  const todo = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();
  function inc() {
    dispatch(increment());
    dispatch(addTodo("Hello World"));
  }
  console.log(todo);

  return (
    <>
      <Navbar />
      <CategoryMenu />
      <FoodItem />
    </>
  );
}

export default App;
