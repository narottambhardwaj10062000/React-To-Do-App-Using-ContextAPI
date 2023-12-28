import { createContext } from "react";

export const ToDoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Hello World",
      completed: false,
    },
  ],
  addToDo: (todo) => {},
  updateToDo: (id, todo) => {},
  deleteToDo: (id) => {},
  toggleCompleted: (id) => {},
});

export const ToDoContextProvider = ToDoContext.Provider;
