import React from "react";

export const TodoCounter = ({ totalTodos, completedTodos }) => {
  return (
    <h1 className="text-[#DAFFFB] font-bold text-xl">
      {completedTodos === totalTodos
        ? "Has completado todos los pendientes"
        : `Has Completado ${completedTodos} de ${totalTodos} TODOs`}
    </h1>
  );
};
