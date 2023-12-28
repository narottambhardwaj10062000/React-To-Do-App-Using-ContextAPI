import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { ToDoContextProvider } from "./contexts/ToDoContext";

function App() {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateToDo = (id, todo) => {
    setTodos((prev) =>
      prev.map((currTodo) => (currTodo.id === id ? todo : currTodo))
    );
  };

  const deleteToDo = (id) => {
    setTodos((prev) => prev.filter((currToDo) => currToDo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((currToDo) =>
        currToDo.id === id
          ? { ...currToDo, completed: !currToDo.completed }
          : currToDo
      )
    );
  };

  //todos => [todo1, todo2, todo3, ......]
  //todos.map((currTodo) => (<TodoItem todo = {currTodo}))>

  return (
    <ToDoContextProvider
      value={{ todos, addToDo, updateToDo, deleteToDo, toggleCompleted }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((currToDo) => (
              <div key={currToDo.id} className="w-full">
                <TodoItem todo={currToDo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoContextProvider>
  );
}

export default App;
