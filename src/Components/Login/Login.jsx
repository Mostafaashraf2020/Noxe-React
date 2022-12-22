import React from "react";
import axios from "axios";
import Joi, { object } from "joi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({saveUserData}) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, seterrorMsg] = useState("");
  const [errorList, seterrorList] = useState([]);
  let navigate = useNavigate();

  let getInputValue = (e) => {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  };
  let goToHome = () => {
    navigate("/");
  };

  let signinApi = async () => {
    let { data } = await axios.post(
      "https://sticky-note-fe.vercel.app/signin",
      user
    );
    if (data.message == "success") {
      // go to home
      localStorage.setItem("token", data.token);
      goToHome();
      saveUserData();
    } else {
      seterrorMsg(data.message);
    }
  };
  let submitFormData = (e) => {
    e.preventDefault();
    let responeValidate = validateFormData();
    if (responeValidate.error) {
      seterrorList(responeValidate.error.details);
    } else {
      signinApi();
    }
  };
  let validateFormData = () => {
    const schema = Joi.object({
      email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
      password: Joi.string().required(),
    });
    return schema.validate(user, { abortEarly: false });
  };

  return (
    <div>
      <h2 className=' w-75 py-5'>Login Form</h2>
      {errorList.map((err, index) => {
        if (err.context.label === "password") {
          return (
            <div key={index} className='alert alert-danger my-2'>
              {"passsword invalid"}
            </div>
          );
        } else {
          return (
            <div key={index} className='alert alert-danger my-2'>
              {err.message}
            </div>
          );
        }
      })}
      {errorMsg ? <div className='alert alert-danger'>{errorMsg}</div> : ""}
      <form onSubmit={submitFormData}>
        <div className='input-data my-3'>
          <label htmlFor='email'>Email:</label>
          <input
            onChange={getInputValue}
            className='form form-control'
            type='email'
            name='email'
          />
        </div>
        <div className='input-data my-3'>
          <label className='p-2' htmlFor='password'>
            Password:
          </label>
          <input
            onChange={getInputValue}
            className='form form-control'
            type='password'
            name='password'
          />
        </div>
        <button className='btn btn-info my-3 float-end'>Login</button>
        <div className='clear-fix'></div>
      </form>
    </div>
  );
}
