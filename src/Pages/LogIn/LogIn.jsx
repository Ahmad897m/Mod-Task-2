import React, { useEffect, useRef, useState } from "react";
import './logIn.css'
import googleImg from '../../assests/images/Google Logo.png'
import appleImg from '../../assests/images/Apple Logo.png'
import facebookImg from '../../assests/images/Facebook Logo.png'
import { Link, useNavigate } from "react-router-dom";
import Main from "../../components/Main/Main";
import axios from "axios";

const LogIn = ({ setSubmitSource  }) => {
    const navigate = useNavigate();


// axios 

const [loginData, setLoginData] = useState({
    email: '',
    password:'',
    phone_number: ''
})

const handleChange = (e) => {
    setLoginData({...loginData,
        [e.target.name]: e.target.value
    });
};



const handleSubmitAxios = async (e) => {
    e.preventDefault();
    
    localStorage.setItem('userEmail', loginData.email)
    
    try {
        console.log('Ahmad'); 
        
        
        const response = await axios.post('https://task5-ammar-allaw.trainees-mad-s.com/api/auth/Login', loginData);
        if(response.data.status === 'success')
            {
                setSubmitSource('FirstPage');
                navigate('/');
            }       
        console.log('Response:', response.data); 
        console.log(response.data.data.token);
            
        let Token = response.data.data.token;
            localStorage.setItem('Token' ,Token)
        
    } catch (error) {
        if(error.response.data.errors[0] === 'You should verfied your email')
            {
                navigate('/signup/verifyEmmail');
            }
        console.error('Error:', error);
        console.error('Error:', error.response.data.errors[0].json);

    }
};





    return (

        <>
        <Main />
            <section className="login">
                <div className="main-log">
                    <div className="overlay"> </div>
                        <div className="content">
                        <form onSubmit={handleSubmitAxios}>
                        <h2>تسجيل الدخول</h2>
                            <div className="inputs">
                            <div className="input">
                            <label htmlFor="email" className="email-label">الايميل</label>
                            <input className="email-input" type="email" name="email" id="name" value={loginData.email}  onChange={handleChange}/>

                            </div>
                            <div className="input">
                            <label htmlFor="phone" className="phone-label"> رقم الهاتف</label>
                            <input className="email-input" type="text" name="phone_number" id="phone_number" value={loginData.phone_number} onChange={handleChange}/>
                            </div>
                            <div className="input">
                            <label htmlFor="password" className="password-label">كلمة المرور</label>
                            <input className="password-input" type="password" name="password" value={loginData.password} onChange={handleChange}/>
                            </div>
                                <div className="input" >
                                    <button className="login-btn" type="submit" >تسجيل الدخول</button>
                                </div>
                            </div>
                                <div className="text">
                                    <p> ليس لديك حساب؟<Link to='/signup' href="#" className="create-account " >إنشاء حساب</Link></p>
                                    <Link className="password-link" to="/signup/verifyEmmail">نسيت كلمة المرور</Link>
                                </div>
                                <div className="line" >
                                    <p className="line-text">أو</p>
                                </div>
                            <div className="icons">
                                <ul>
                                    <li> <a href="#" className="icon facebook " > <span>Facebook </span><img src={facebookImg} alt="facebook-icon" /> </a> </li>
                                    <li > <a href="#" className="icon apple "><span> Apple </span><img src={appleImg} alt="Apple-icon" />  </a> </li>
                                    <li> <a href="#" className="icon google"> <span className="text-black">Google </span><img src={googleImg} alt="google-icon" /> </a> </li>
                                </ul>
                        </div>
                        </form>
                    </div>
                </div>
        </section>
        </>
    )
} 

export default LogIn;
