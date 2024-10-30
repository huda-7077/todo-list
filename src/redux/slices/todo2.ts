import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
  todos: { title: string; isDone: boolean }[];
}

const initialState: TodoState = {
  todos: [
    { title: "masak", isDone: false },
    { title: "ngoding", isDone: true },
    { title: "bahas apapun", isDone: false },
  ],
};

const todo2Slice = createSlice({
  name: "todo2",
  initialState,
  reducers: {
    createTodo: (
      state,
      action: PayloadAction<{ title: string; isDone: boolean }>,
    ) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos.splice(action.payload, 1);
    },
    editTodo: (
      state,
      action: PayloadAction<{ index: number; value: boolean }>,
    ) => {
      const { index, value } = action.payload;
      state.todos[index].isDone = value;
    },
  },
});

export const { createTodo, deleteTodo, editTodo } = todo2Slice.actions;
export default todo2Slice.reducer;
