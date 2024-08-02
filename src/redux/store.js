import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counter.slice";
import todoReducer from "./todo/todo.slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
});
