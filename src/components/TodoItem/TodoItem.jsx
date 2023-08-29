import React from "react";

export const TodoItem = ({ title, completed, markAsCompleted, deleteTodo }) => {
  //TODO USAR EL COMPLETED
  return (
    <div
      className={`${
        completed ? "bg-[#3fcfff]" : "bg-[#176B87]"
      } w-full h-12 flex justify-between items-center border border-[#64CCC5] px-4 rounded`}
    >
      <p className="flex flex-1 text-white">{title}</p>

      <div className="flex gap-6 items-center justify-center">
        <button type="button" onClick={markAsCompleted}>
          V
        </button>
        <button type="button" onClick={deleteTodo}>
          x
        </button>
      </div>
    </div>
  );
};
