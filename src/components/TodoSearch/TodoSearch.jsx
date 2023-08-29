import React from "react";

export const TodoSearch = ({ searchValue, setSearchValue }) => {
  return (
    <input
      type="text"
      placeholder="Search Todo"
      value={searchValue}
      className="border border-blue-500 rounded-full w-full h-14 pl-6 placeholder:font-bold"
      onChange={({ target }) => {
        setSearchValue(target.value);
      }}
    />
  );
};
