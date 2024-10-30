// src/redux/slices/todo.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  title: string;
  isDone: boolean;
}

interface TodoState {
  todos: Todo[];
  newTodo: string;
}

const initialState: TodoState = {
  todos: [
    { title: "masak", isDone: false },
    { title: "ngoding", isDone: true },
    { title: "bahas apapun", isDone: false },
  ],
  newTodo: "",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state) => {
      state.todos.push({ title: state.newTodo, isDone: false });
      state.newTodo = "";
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos.splice(action.payload, 1);
    },
    toggleIsDone: (
      state,
      action: PayloadAction<{ index: number; isDone: boolean }>,
    ) => {
      state.todos[action.payload.index].isDone = action.payload.isDone;
    },
    setNewTodo: (state, action: PayloadAction<string>) => {
      state.newTodo = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, toggleIsDone, setNewTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
