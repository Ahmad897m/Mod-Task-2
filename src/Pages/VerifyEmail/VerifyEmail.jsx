import React, { useEffect, useState } from "react";
import './verifyEmail.css';
import { Link, useNavigate } from "react-router-dom";
import Main from "../../components/Main/Main";
import axios from "axios";


const VerifyEmail = ({ setSubmitSource}) => {

    const [localEmail, setLocalEmail] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        const localEmail = localStorage.getItem('userEmail')
        if(localEmail) {
            setLocalEmail(localEmail)
        }
    }, [])
    // axios for sent token
    const [email, setEmail] = useState('');
    const [tokens, setTokens] = useState(new Array(6).fill('')); //

    const handleChange = (e, index) => {
        const newTokens = [...tokens];
        newTokens[index] = e.target.value;
        setTokens(newTokens);
      };

const handleSubmitAxios = async (e) => {
    e.preventDefault();
    let token = tokens.join('')
    localStorage.setItem('token', token)

    try {
        const response = await axios.post('https://task5-ammar-allaw.trainees-mad-s.com/api/auth/VerifiedEmail', {
            email,
            token} ,
            {
                headers: {
                    'Content-Type' :'application/json',
                    Authorization: `Bearer ${token}`

                }
            }
        )   
        if(response.data.staus === 'success' )
            {
                setSubmitSource('ThirdPage')
                navigate('/')
            }

        console.log("working")
        console.log('Response', response.data)

    } catch (error) {
        if(error.response.data.errors[0] === 'This email is already verified')
            {
                setSubmitSource('ThirdPage')
                navigate('/')
            }
        console.log("not working")
        console.error('Error:', error); 
        console.log(token)
    }

}


const [Token, setToken] = useState(localStorage.getItem('Token'));

const handleResent = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('https://task5-ammar-allaw.trainees-mad-s.com/api/auth/RefreshToken', {Token},  {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Token}`
            }
        }) 
        if(response.data.status === 'success') {
            localStorage.setItem('access_token', response.data.data.access_token)
            navigate('/')
            setToken(localStorage.getItem('access_token'))
            console.log(response.data.data.access_token)
        }
        console.log(response.data)
        console.log('done')
        
    }catch (error) {
        console.error('Error:', error); 
        console.log('Ops')
        console.log(Token)
    }
}



    return (
        <>   
        <Main />
            <section className="verifty">
                <div className="main-verifty">
                <div className="overlay"></div>
                    <div className="content">
                        <h2>مرحبا بك  <span>RED</span></h2>
                        <p>لقد تم أرسال رمز التأكيد إلى  <a href="">{localEmail}</a></p>
                        <form className="code" onSubmit={handleSubmitAxios} >
                            <div className="enterEmail">
                                <label htmlFor="email">الإيميل</label>
                            <input type="email" name='email' id='email' value={email}  onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <ul className="code-number">
                                {tokens.map((digit, index) => (
                                        <li key={index}>
                                        <input
                                        type="text"
                                        name={`token${index}`}
                                        value={digit}
                                        onChange={(e) => handleChange(e, index)}
                                        maxLength="1"
                                        required
                                        />
                                        </li>
                                        ))}
                            </ul>
                        <button className="confirm d-block"  type="submit" >تأكيد</button>
                        </form>
                        <p>إذا لم يصلك الرمز يمكنك إعادة المحاولة بعد <span>4:20د</span></p>
                        <button className="resent" onClick={handleResent}>إعادة الإرسال</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VerifyEmail;