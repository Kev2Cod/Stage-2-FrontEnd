import React from 'react'
import { useNavigate } from 'react-router-dom'
import Image from '../assets/img/Logo-Dumb-Merch.png'

import FormRegister from '../components/Form/FormRegister'


const Register = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/login')
    }
    const handleRegister = () => {
        navigate('/register')
    }
    return (
        <div className='container text-white d-lg-flex align-items-center justify-content-center height-90' >
            <div className="row d-flex align-items-center justify-content-between ">
                <div className="col-lg-6 col-12 text-lg-start text-center mt-lg-0 mt-5 ">
                    <img src={Image} style={{ maxWidth: '200px' }} />
                    <h2 className='mt-lg-2 mt-3 '>Easy, Fast and Reliable</h2>
                    <p className='text-var-gray' >Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in <span className='text-var-gray fw-bold' >Indonesia</span> </p>
                    <div className='mt-lg-5 mt-2 mb-lg-0 mb-5 text-lg-start text-center'>
                    <a className="btn bg-var-red text-white fw-bold px-5 me-2" onClick={handleLogin}>Login</a>
                    <a className="btn text-white fw-bold px-5 text-light ms-2" onClick={handleRegister}>Register</a>
                    </div>
                </div>
                <div className="col-lg-6 col-12 text-center px-5 mb-lg-0 mb-5">
                    <FormRegister />
                </div>
            </div>
        </div>
    )
}

export default Register