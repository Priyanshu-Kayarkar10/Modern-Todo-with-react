import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [todoValue, setTodoValue] = useState("");

  return (
    <header className="text-white flex justify-between gap-x-4 px-6 py-5 items-center font-semibold md:px-[10rem] h-20 sm:justify-center sm:gap-6 md:gap-45 xl:px-[20rem]">
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo(todoValue);
            setTodoValue("");
          }
        }}
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        className="outline-none tracking-widest w-full bg-transparent border border-1 border-zinc-600 rounded-md px-3 p-2 md:p-[0.6rem] text-md md:text-xl text-white"
        type="text"
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          addTodo(todoValue);
          setTodoValue("");
        }}
        className="p-1 text-lg border border-1 border-zinc-600 hover:bg-zinc-800 hover:opacity-[.8] active:opacity-[0.4] px-6 rounded-md md:px-8 md:p-[0.4rem] md:text-xl lg:py-[0.54rem] lg:px-[2rem] text-md"
        type="submit"
      >
        Add
      </button>
    </header>
  );
};

export default TodoInput;
