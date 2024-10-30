import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import todoReducer from "./slices/todo";
import todo2Reducer from "./slices/todo2";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    todo2: todo2Reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
