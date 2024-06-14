import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList"
import { useEffect, useState } from "react";

function App() {

  const storedTodo = JSON.parse(localStorage.getItem("todos")) || ["Go to Gym", "Drink 4 Litres of water"];
  const storedCompletedTodos = JSON.parse(localStorage.getItem("completedTodos")) || ["Nothing"];

  const [todos, setTodos] = useState(storedTodo);

  const [completedTodos, setCompletedTodos] = useState(storedCompletedTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
  }, [todos, completedTodos]);



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


  const taskComplete = (index) => {
    const newTodo = storedTodo[index];
    console.log(newTodo);
    const newCompletedTodoList = [...storedCompletedTodos, newTodo];
    setCompletedTodos(newCompletedTodoList);
    localStorage.setItem("completedTodos", JSON.stringify(newCompletedTodoList));
    deleteTodo(index);
  }

  const deleteCompletedTodo = (index) => {
    const newCompletedTodos = storedCompletedTodos.filter((todo, todoIndex) => {
      return (todoIndex !== index);
    })
    localStorage.setItem("completedTodos", JSON.stringify(newCompletedTodos))
    setCompletedTodos(newCompletedTodos);

  }

  return (
    <main className="bg-n1 text-white w-full h-screen font-poppins flex-col pb-10 overflow-y-scroll ">
      <div className="flex items-center justify-center h-[20%] ">
        <h1 className=" md:text-4xl text-3xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.blue.300),theme(colors.purple.300),theme(colors.purple.300),theme(colors.pink.200),theme(colors.blue.100),theme(colors.purple.300),theme(colors.pink.200))] bg-[length:200%_auto] animate-gradient">
          Modern Todo
        </h1>
      </div>
      <TodoInput
        addTodo={addTodo}
      />

      <TodoList
        deleteCompletedTodo={deleteCompletedTodo}
        completedTodos={completedTodos}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        todos={todos}
        taskComplete={taskComplete} />

        <div className=" absolute flex items-center pb-2 w-full bottom-0 h-[5%] justify-center  ">
          <h1 className="font-semibold" >Build with 💖 by <span className="  font-extrabold bg-clip-text tracking-wider text-transparent bg-[linear-gradient(to_right,theme(colors.blue.300),theme(colors.purple.300),theme(colors.purple.300),theme(colors.pink.200),theme(colors.blue.100),theme(colors.purple.300),theme(colors.pink.200))] bg-[length:200%_auto] animate-gradient">
          PRIYANSHU
        </span></h1>
        </div>
    </main>
  );
}

export default App;
