import React from "react";

const Login = ({ title, onChange, defaultValue }) => {
  return (
    <div>
      <label>{title}</label>
      <input
        type={"text"}
        placeholder={"Enter your login"}
        onChange={onChange}
        value={defaultValue}
      ></input>
    </div>
  );
};

export default Login;