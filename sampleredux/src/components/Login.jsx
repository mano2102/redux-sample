import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/userSlice";

const Login = () => {
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
    console.log(formdata);
  };
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    nav("/home");
    dispatch(
      login({
        username: formdata.username,
      })
    );
  };
  const dispatch = useDispatch();
  const nav = useNavigate();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formdata.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          value={formdata.password}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
