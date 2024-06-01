import React, { useEffect, useRef } from "react";
import './logIn.css'
import googleImg from '../../assests/images/Google Logo.png'
import appleImg from '../../assests/images/Apple Logo.png'
import facebookImg from '../../assests/images/Facebook Logo.png'
import { Link, useNavigate } from "react-router-dom";
import Main from "../../components/Main/Main";

const LogIn = ({ setSubmitSource    }) => {
    const navigate = useNavigate();

    const handleSubmit = () => {
    setSubmitSource('FirstPage');
    navigate('/');
    }
    return (

        <>
        <Main />
            <section className="login">
                <div className="main-log">
                    <div className="overlay"> </div>
                        <div className="content">
                        <form action="">
                        <h2>تسجيل الدخول</h2>
                            <div className="inputs">
                            <div className="input">
                            <label htmlFor="" className="email-label">الايميل أو رقم الهاتف</label>
                            <input className="email-input" type="email"/>
                            </div>
                            <div className="input">
                            <label htmlFor="" className="password-label">كلمة المرور</label>
                            <input className="password-input" type="password"/>
                            </div>
                                <div className="input" >
                                    <button className="login-btn" type="submit" onClick={handleSubmit}>تسجيل الدخول</button>
                                </div>
                            </div>
                                <div className="text">
                                    <p> ليس لديك حساب؟<Link to='/signup' href="#" className="create-account " >إنشاء حساب</Link></p>
                                    <Link className="password-link" to="/">نسيت كلمة المرور</Link>
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
