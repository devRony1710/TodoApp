import { useState } from "react";
import "./App.css";
import {
  CreateTodoButton,
  TodoCounter,
  TodoItem,
  TodoList,
  TodoSearch,
} from "./components";

const defaulTodos = [
  {
    title: "tarea 1",
    completed: true,
    id: 1,
  },
  {
    title: "tarea 2",
    completed: true,
    id: 2,
  },
  {
    title: "Algo nuevo por buscar",
    completed: false,
    id: 3,
  },
  {
    title: "Curso de React Js",
    completed: false,
    id: 4,
  },
];

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [todosArray, setTodosArray] = useState(defaulTodos);

  const completedTodos = todosArray.filter(
    (todoItem) => todoItem.completed
  ).length;

  const searchedTodos = todosArray.filter((todoItem) => {
    const todoText = todoItem.title.toLocaleLowerCase();
    const searchTodoText = searchValue.toLocaleLowerCase();

    return todoText.includes(searchTodoText);
  });

  const handleCompleteTodo = (id) => {
    // create copy for todo' state
    const completedTodo = [...todosArray];

    // get the index with the id of the function parameters
    const todoItem = todosArray.findIndex((item) => item.id === id);

    // change the value for completed property
    completedTodo[todoItem].completed = !completedTodo[todoItem].completed;

    // update todo' state
    setTodosArray(completedTodo);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todosArray];

    const todoIndex = todosArray.findIndex((item) => item.id === id);

    // delete one item of the todo' state copy
    newTodos.splice(todoIndex, 1);

    setTodosArray(newTodos);
  };

  return (
    <div className="w-full h-screen px-8 pt-10 bg-[#001C30] flex flex-col items-center gap-10">
      <TodoCounter
        totalTodos={todosArray.length}
        completedTodos={completedTodos}
      />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo, index) => (
          <TodoItem
            completed={todo.completed}
            title={todo.title}
            key={todo.id}
            markAsCompleted={() => {
              handleCompleteTodo(todo.id);
            }}
            deleteTodo={() => {
              deleteTodo(todo.id);
            }}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
