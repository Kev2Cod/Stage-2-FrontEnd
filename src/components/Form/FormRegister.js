import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const FormRegister = () => {
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value, //? name
    });
  };

  // useEffect(() => {
  //   if(register){
  //     console.log(register)
  //   }
  // },[register])

  const handleOnSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('user', JSON.stringify(register))
    navigate('/login')
  };


  return (
    <>
      <div className="card border-red text-end mb-5 rounded-3">
        <div className="card-body bg-var-dark p-4">
          <h3 className="text-start mb-3 ">Register </h3>
          <form onSubmit={handleOnSubmit}>
            <div className="input-group mb-3">
              <input type="text" className="form-control bg-var-dark text-white border-form" placeholder="Full Name" name="fullname" onChange={handleOnChange} value={register.fullname} required />
            </div>
            <div className="input-group mb-3">
              <input type="Email" className="form-control bg-var-dark text-white border-form" placeholder="Email" name="email" onChange={handleOnChange} value={register.email} required />
            </div>
            <div className="input-group mb-3">
              <input type="password" className="form-control bg-var-dark text-white border-form" placeholder="Password" name="password" onChange={handleOnChange} value={register.password} required />
            </div>
            <button className="btn bg-var-red text-white fw-bold container" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormRegister;
