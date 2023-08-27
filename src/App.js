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
  },
  {
    title: "tarea 2",
    completed: true,
  },
  {
    title: "tarea 3",
    completed: false,
  },
];

function App() {
  return (
    <div className="w-full h-screen px-8 pt-10 bg-[#001C30] flex flex-col items-center gap-10">
      <TodoCounter totalTodos={25} completedTodos={17} />

      <TodoSearch />

      <TodoList>
        {defaulTodos.map((todo, index) => (
          <TodoItem completed={todo.completed} title={todo.title} key={index} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
