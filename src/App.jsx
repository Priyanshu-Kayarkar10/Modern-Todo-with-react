import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList"
import { useEffect, useState } from "react";

function App() {

  const storedTodo = JSON.parse(localStorage.getItem("todos")) || ["Go to Gym","Drink 4 Litres of water"];

  const [todos, setTodos] = useState(storedTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);



  const addTodo = (newTodo) => {

    if (newTodo) {
      const newTodoList = [...storedTodo, newTodo];

      setTodos(newTodoList);
      localStorage.setItem("todos", JSON.stringify(newTodoList))
    }
  }

  const editTodo = (index, newTodo) => {

    if (newTodo) {
      storedTodo[index] = newTodo;
      localStorage.setItem("todos", JSON.stringify(storedTodo));
      setTodos(storedTodo);
    }

  }

  const deleteTodo = (index) => {

    const newTodoList = storedTodo.filter((todo, todIndex) => {
      return (todIndex !== index)
    })
    localStorage.setItem("todos", JSON.stringify(newTodoList))
    setTodos(newTodoList);
  }


  return (
    <main className="bg-n1 text-white w-full h-screen overflow-y-hidden pb-4 ">
      <TodoInput addTodo={addTodo} />
      <TodoList editTodo={editTodo} deleteTodo={deleteTodo} todos={todos} />
    </main>
  );
}

export default App;
