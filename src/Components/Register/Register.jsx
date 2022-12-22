import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Joi from "joi";

export default function Register() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: "",
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [errorList, setErrorList] = useState([]);
  let navigate = useNavigate();
  let signupApi = async () => {
    let { data } = await axios.post(
      "https://sticky-note-fe.vercel.app/signup",
      user
    );
    console.log(data);
    if (data.message === "success") {
      goToLogin();
    } else {
      {
        setErrorMsg(data.message);
      }
    }
  };

  let submitFormData = (e) => {
    e.preventDefault();
    let validationResponse = validateFormData();

    if (validationResponse.error) {
      setErrorList(validationResponse.error.details);
      console.log(errorList);
    } else {
      signupApi();
    }
  };

  let getInputValue = (e) => {
    // pass by ref - shallow copy pointer in same index
    // let myUser = user;
    // pass by value - deep copy
    let myUser = { ...user };
    // dot brackets => dynamic code
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser);
  };
  let goToLogin = () => {
    navigate("/login");
  };
  let validateFormData = () => {
    const schema = Joi.object({
      first_name: Joi.string().alphanum().required().min(2).max(20),
      last_name: Joi.string().alphanum().required().min(2).max(20),
      age: Joi.number().required().min(20).max(80),
      email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
      password: Joi.string().required(),
    });
    return schema.validate(user, { abortEarly: false });
  };

  return (
    <>
      <div>
        <h2 className=' w-75 py-5'>Registration Form</h2>
        {errorList.map((errorValid, index) => (
          <div key={index} className='alert alert-danger'>
            {errorValid.message}
          </div>
        ))}

        {errorMsg ? <div className='alert alert-danger'>{errorMsg}</div> : ""}
        <form onSubmit={submitFormData}>
          <div className='input-data my-3'>
            <label htmlFor='first_name'>First Name:</label>
            <input
              onChange={getInputValue}
              type='text'
              className='form-control my3'
              name='first_name'
            />
          </div>

          <div className='input-data my-3'>
            <label htmlFor='last_name'>Last Name:</label>
            <input
              onChange={getInputValue}
              type='text'
              className='form-control my-2'
              name='last_name'
            />
          </div>

          <div className='input-data my-3'>
            <label htmlFor='age'>Age:</label>
            <input
              onChange={getInputValue}
              type='number'
              className='form-control my-2'
              name='age'
            />
          </div>

          <div className='input-data my-3'>
            <label htmlFor='email'>Email:</label>
            <input
              onChange={getInputValue}
              type='email'
              className='form-control my-2'
              name='email'
            />
          </div>

          <div className='input-data my-3'>
            <label htmlFor='password'>Password:</label>
            <input
              onChange={getInputValue}
              type='password'
              className='form-control my-2'
              name='password'
            />
          </div>
          <button className='btn btn-info my-3 float-end'>register</button>
          <div className='clear-fix'></div>
        </form>
      </div>
    </>
  );
}
