import React from "react";

export const TodoList = ({ children }) => {
  return <ul className="w-full h-min flex flex-col gap-7">{children}</ul>;
};
