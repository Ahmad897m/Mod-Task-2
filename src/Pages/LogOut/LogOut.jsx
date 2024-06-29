import React from "react";
import './logOut.css';
import { useNavigate } from "react-router-dom";
import Main from "../../components/Main/Main";
import axios from "axios";

const LogOut = ({ setSubmitSource     }) => {
    const navigate = useNavigate();

    const handleStay = () => {
        navigate('/')
    }
// axios

    const handleSubmitAxios =  async (e) => {
        e.preventDefault();
        let Token = localStorage.getItem('Token');

        try {

            const response = await axios.post('https://task5-ammar-allaw.trainees-mad-s.com/api/auth/Logout', {Token} , {
                headers:{
                    'Accept': 'application/json',
                    Authorization: `Bearer ${Token}`
                }
            })
            console.log('Resonse', response.data)
            if(response.data.status === 'success')
                {
                    setSubmitSource('SecondPage');
                    navigate('/');
                }
            console.log('done')
            console.log(Token)
            
        } catch(error) {
            console.log(error)
            console.log('Ops')
            console.log(`Bearer ${Token}`)
        }




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
                            <button className="confirm" onClick={handleSubmitAxios}>تأكيد</button>
                            <button className="back" onClick={handleStay}>تراجع</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LogOut;