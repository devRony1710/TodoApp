import "./App.css";
import {
  CreateTodoButton,
  TodoCounter,
  TodoItem,
  TodoList,
} from "./components";

function App() {
  return (
    <div className="App">
      <TodoCounter />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
