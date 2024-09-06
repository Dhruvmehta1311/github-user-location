/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Input = ({ inputValue, inputVal }) => {
  return (
    <>
      <input
        onChange={inputValue}
        className="h-[40px] px-4 rounded placeholder:text-lg max-w-[500px] w-[98%] mx-auto text-black"
        type="text"
        placeholder="Enter Username Here"
      />
    </>
  );
};

export default Input;
