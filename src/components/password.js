import React from "react";

const Password = ({ title, onChange, defaultValue }) => {
  return (
    <div>
      <label>{title}</label>
      <input
        type={"password"}
        placeholder={"Enter your password"}
        value={defaultValue}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Password;