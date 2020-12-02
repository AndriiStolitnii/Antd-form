import React from "react";

const RememberMe = ({ onChange, defaultValue }) => {
  return (
    <div>
      <label>Remember me: </label>
      <input type="checkbox" onChange={onChange} checked={defaultValue}></input>
    </div>
  );
};

export default RememberMe;
