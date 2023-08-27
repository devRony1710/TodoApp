import React, { useState } from "react";

export const TodoSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  console.log(
    "🚀 ~ file: TodoSearch.jsx:5 ~ TodoSearch ~ searchValue:",
    searchValue
  );

  return (
    <input
      type="text"
      placeholder="Search Todo"
      className="border border-blue-500 rounded-full w-full h-14 pl-6 placeholder:font-bold"
      onChange={({ target }) => {
        setSearchValue(target.value);
      }}
    />
  );
};
