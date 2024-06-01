import React, { useState } from "react";
import './header.css';
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb';
import { Link } from "react-router-dom";
import Logo from '../../assests/images/logo.png'


const Header = ({ setSubmitSource ,  submitSource}) => {
    
    const buttonText = submitSource === 'FirstPage' ? 'تسجيل الخروج '   :
                        submitSource === 'SecondPage' ? 'تسجيل الدخول ' :
                        submitSource === "ThirdPage" ? "تسجيل الخروج" :
    'تسجيل الدخول';



const [navbar, setNavbar] = useState("navList")

const showNav = () => {
    setNavbar("navList activeNav")
}

const removeNav = () => {
    setNavbar('navList ')
}


    return (
        <>
        <header className="header">
            <div className="container d-flex">
                <div className="toggleNavbar">
                <TbGridDots  className='icon' onClick={showNav} />
                </div>
                <div className={`left-btn button` }>
                    <Link className="start-btn" to="/">ابدا</Link>
                    <Link className="sign-up-btn" type="submit" to={submitSource === 'FirstPage' || || submitSource === 'ThirdPage' ? "logout" : "login"} > {buttonText} </Link>
                </div>
                <div className="nav align-items-center">
                            <ul className={navbar}>

                                <li className="navitem">
                                    <a href="#" className="navLink">المزيد</a>
                                </li>

                                <li className="navitem">
                                    <a href="#" className="navLink">البيع</a>
                                </li>

                                <li className="navitem">
                                    <a href="#" className="navLink">برامج الجنسية لدى اسيستفاي</a>
                                </li>

                                <li className="navitem">
                                    <a href="#" className="navLink">حول</a>
                                </li>
                                
                                <li className="navitem">
                                    <a href="#" className="navLink">العقارات</a>
                                </li>
                            <div  className="closeNavbar " onClick={removeNav}>
                    <AiFillCloseCircle  className="icon"  />
                    </div>
                </ul>
                <div className="logo-image">
                            <a href="#" className="logo">
                            <img src={Logo} alt="logo-image" />
                            </a>
                    </div>
                    </div>
            </div>
        </header>
        </>
    )
}
export default Header;
