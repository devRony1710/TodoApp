import React from "react";

export const TodoItem = ({ title, completed }) => {
  return (
    <div className="w-full h-12 flex justify-between items-center border border-[#64CCC5] px-4 bg-[#176B87] rounded">
      <p className="flex flex-1 text-white">{title}</p>

      <div className="flex gap-6 items-center justify-center">
        <button type="button">V</button>
        <button type="button">x</button>
      </div>
    </div>
  );
};
