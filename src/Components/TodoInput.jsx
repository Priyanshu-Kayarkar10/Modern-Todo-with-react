import { useState } from "react";

const TodoInput = ({ addTodo }) => {

  const [todoValue, setTodoValue] = useState("");

  return (
    <header className="text-white flex justify-between font-press gap-x-4 px-6 py-8 pt-[4.5rem] items-center  md:px-[10rem] xl:px-[20rem] h-20 sm:justify-center sm:gap-6 md:gap-45 tracking-wider ">
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo(todoValue);
            setTodoValue("");
          }
        }}
        value={todoValue}
        onChange={(e) => { setTodoValue(e.target.value) }}
        className="outline-none  w-full bg-transparent border border-1 border-zinc-600 rounded-md p-[0.5rem]  md:rounded-md md:p-[0.7rem] text-sm text-white"
        type="text"
        placeholder="Enter todo..."
      />
      <button
        onClick={(e) => {
          addTodo(todoValue);
          setTodoValue("");
        }}
        className="p-[0.5rem] border border-1 border-zinc-600 hover:bg-zinc-800 hover:opacity-[.8] active:opacity-[0.4] px-3 rounded-md md:rounded-md md:px-8 md:p-[0.7rem] md:text-md text-[.8rem] "
        type="submit">Add</button>
    </header>
  );
};

export default TodoInput;
