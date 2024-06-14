import { useState, useRef, useEffect } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  const [isEditTodoActive, setIsEditTodoActive] = useState(false);
  const [editedValue, setEditedValue] = useState("");
  const [currentElementId, setCurrentElementId] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditTodoActive && currentElementId !== null) {
      inputRef.current?.focus();
    }
  }, [isEditTodoActive, currentElementId]);

  return (
    <ul
      onClick={(e) => {
        if (
          e.target.tagName !== "path" &&
          e.target.tagName !== "svg" &&
          e.target.tagName !== "INPUT"
        ) {
          setIsEditTodoActive(false);
        }
      }}
      className="overflow-y-scroll h-[84%] mt-2 sm:mt-4 pt-8 px-8 flex flex-col items-start font-press gap-y-8 text-sm md:px-[10rem] xl:px-[20rem]"
    >
      {todos.map((todo, index) => (
        <li
          className="flex items-center p-3 rounded-sm md:rounded-md h-[3rem] md:h-[4rem] justify-between bg-neutral-600 w-full transition-transform transform scale-1 animate-scale-up"
          key={index}
        >
          <div className="overflow-hidden mr-10">
            {isEditTodoActive && currentElementId == index ? (
              <input
                ref={inputRef}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    editTodo(index, editedValue);
                    setEditedValue("");
                    setIsEditTodoActive(false);
                  }
                }}
                value={editedValue}
                onChange={(e) => setEditedValue(e.target.value)}
                className="p-1 md:p-2 bg-transparent border border-1 md:w-[40rem] border-neutral-500 rounded-sm outline-none text-sm w-full"
                type="text"
              />
            ) : (
              <div>{todo}</div>
            )}
          </div>
          <div
            id={index}
            onClick={(e) => {
              setCurrentElementId(e.currentTarget.id);
            }}
            className="flex gap-6 items-center justify-center select-none"
          >
            <BiSolidEdit
              onClick={() => {
                setEditedValue("");
                setIsEditTodoActive(true);
                setCurrentElementId(index);
              }}
              className="cursor-pointer hover:opacity-[0.65] active:opacity-[0.2] w-6 h-6 md:w-7 md:h-7"
            />
            <MdDelete
              onClick={() => deleteTodo(index)}
              className="cursor-pointer hover:text-red-600 active:opacity-[0.15] w-6 h-6 md:w-7 md:h-7"
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
