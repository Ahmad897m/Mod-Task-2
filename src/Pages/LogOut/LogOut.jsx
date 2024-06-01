import React from "react";
import './logOut.css';
import { useNavigate } from "react-router-dom";
import Main from "../../components/Main/Main";

const LogOut = ({ setSubmitSource     }) => {
    const navigate = useNavigate();

    const handleSubmit = () => {
      setSubmitSource('SecondPage');
      navigate('/');
    }
    const handleStay = () => {
        navigate('/')
    }
    return (
        <>
        <Main />
            <section className="logout">
                <div className="main-out">
                <div className="overlay"></div>
                    <div className="content">
                        <h2>هل انت متأكد من تسجيل الخروج</h2>
                        <div className="buttons">
                            <button className="confirm" onClick={handleSubmit}>تأكيد</button>
                            <button className="back" onClick={handleStay}>تراجع</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LogOut;