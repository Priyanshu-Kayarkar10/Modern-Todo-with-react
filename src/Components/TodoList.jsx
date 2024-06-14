import { useState, useRef, useEffect } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { MdOutlineTaskAlt } from "react-icons/md";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const TodoList = ({ completedTodos, todos, deleteTodo, editTodo, taskComplete, deleteCompletedTodo }) => {
  const [isEditTodoActive, setIsEditTodoActive] = useState(false);
  const [isCompletedTodoActive, setIsCompletedTodoActive] = useState(false);
  const [editedValue, setEditedValue] = useState("");
  const [currentElementId, setCurrentElementId] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditTodoActive && currentElementId !== null) {
      inputRef.current?.focus();
      setEditedValue(todos[currentElementId]);
    }
  }, [isEditTodoActive, currentElementId, todos]);

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
      className=" min-h-[84%] mt-2 sm:mt-4 pt-8 px-8 flex flex-col items-start  gap-y-8 text-md md:text-lg md:px-[10rem] xl:px-[20rem]"
    >
      {todos.map((todo, index) => (
        <li
          className="flex items-center p-3 rounded-sm border shadow-sm shadow-white/5 border-zinc-800 md:rounded-md overflow-hidden justify-between bg-neutral-900 w-full transition-transform transform scale-1 animate-scale-up"
          key={index}
        >
          <div className="flex-1 mr-10  break-words">
            {isEditTodoActive && currentElementId == index ? (
              <>
                <input
                  ref={inputRef}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      editTodo(index, editedValue);
                      setEditedValue("");
                      setIsEditTodoActive(false);
                    } else if (e.key === "Escape") {
                      setIsEditTodoActive(false);
                    }
                  }}
                  value={editedValue}
                  onChange={(e) => setEditedValue(e.target.value)}
                  className="p-1 md:p-2 bg-transparent border border-1 md:w-[40rem] border-neutral-500 rounded-sm outline-none text-sm w-full"
                  type="text"
                />
                <span></span>
              </>

            ) : (
              <div className="whitespace-pre-wrap">{todo}</div>
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
            <MdOutlineTaskAlt
              onClick={() => { taskComplete(index) }}
              className="cursor-pointer sm:hover:text-green-600 active:opacity-[0.2]  w-6 h-6 md:w-7 md:h-7"
            />
          </div>
        </li>
      ))}


      <section
        key={`${Math.random()}`}
        className=" w-full h-auto flex flex-col mt-5 items-center justify-center gap-y-6 ">
        <button
          onClick={() => {
            setIsCompletedTodoActive(!isCompletedTodoActive)
          }}
          className="font-bold tracking-wider p-2 border rounded border-zinc-800 flex items-center justify-center gap-x-4 shadow-sm shadow-white/5 hover:opacity-[0.5] " >Completed Todos
          {
            isCompletedTodoActive ? (
              <span><FaArrowAltCircleDown
                className="cursor-pointer   w-6 h-6 md:w-7 md:h-7"
              /></span>
            ) : (
              <span><FaArrowAltCircleRight
                className="cursor-pointer   w-6 h-6 md:w-7 md:h-7"
              /></span>
            )
          }
        </button>

        {
          completedTodos.map((completedTodo, index) => {
            return (
              <>
                {
                  isCompletedTodoActive && (
                    <li
                      className="flex items-center pr-4 p-1 rounded-sm border shadow-sm shadow-white/5 border-zinc-800 md:rounded-md overflow-hidden justify-between bg-neutral-900 w-full transition-transform transform scale-1 animate-scale-up-fast"
                      key={index}
                    >
                      <div className="p-2  " >{completedTodo}</div>

                      <span className="flex items-center justify-center gap-x-5 " >
                        <MdDelete
                          onClick={()=> {
                            deleteCompletedTodo(index)
                          }}
                          className="cursor-pointer
                          hover:text-red-600 active:opacity-[0.2]  w-6 h-6 md:w-7 md:h-7"
                        />

                        <MdOutlineTaskAlt
                          className="cursor-pointer
                  text-green-600 sm:hover:text-white/80 active:opacity-[0.2]  w-6 h-6 md:w-7 md:h-7"
                        />
                      </span>
                    </li>
                  )
                }
              </>
            )


          })
        }
      </section>

    </ul>
  );
};

export default TodoList;
