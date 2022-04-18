import React from "react";
import { users } from "../DataDummy/Users";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import PrivateRoute from "../PrivateRoute";

export const FormLogin = () => {
  const navigate = useNavigate();

  const [emailLog, setEmaillog] = useState("");
  const [passwordLog, setPasswordlog] = useState("");

  const [isLogin, setIsLogin] = useState(false);

  const [flag, setFlag] = useState(false);

  const dataUser = users;
  console.log(dataUser)

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const isAuth = users.find((user) => user.email === emailLog)

    if(isAuth) {
      if(isAuth.password !==  passwordLog){
        setFlag(true)
        console.log("password Salah")
      } else{
        setIsLogin(true)
        setFlag(false)
        navigate('/')
        console.log("Berhasil Login")
      }
    }else{
      console.log("Email Tidak Ada")
      setFlag(true)
    }
  };

  return (
    <>
      <div className="card border-red text-end mb-5 rounded-3">
        <div className="card-body bg-var-dark p-4">
          <h3 className="text-start mb-3 ">Login</h3>
          <form onSubmit={handleOnSubmit}>
            <div className="input-group mb-3">
              <input type="Email" className="form-control bg-var-dark text-white border-form" placeholder="Email" name="email" onChange={(event) => setEmaillog(event.target.value)} required />
            </div>
            <div className="input-group mb-3">
              <input type="password" className="form-control bg-var-dark text-white border-form" placeholder="Password" name="password" onChange={(event) => setPasswordlog(event.target.value)} required />
            </div>

            {flag && (
              <Alert className="alert-warning text-center" variant="warning">
                <span>Masukan email atau password dengan benar!</span>
              </Alert>
            )}
            <button className="btn bg-var-red text-white fw-bold container">Login</button>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default FormLogin;
