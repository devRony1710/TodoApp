import React from "react";

export const TodoCounter = ({ totalTodos, completedTodos }) => {
  return (
    <h1 className="text-[#DAFFFB] font-bold text-xl">
      Has Completado {completedTodos} de {totalTodos} TODOs
    </h1>
  );
};
