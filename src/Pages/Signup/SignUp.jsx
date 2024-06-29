
import React, { useEffect, useRef, useState } from "react";
import './signUp.css';
import { BsUpload } from "react-icons/bs";
import googleImg from '../../assests/images/Google Logo.png'
import appleImg from '../../assests/images/Apple Logo.png'
import facebookImg from '../../assests/images/Facebook Logo.png'
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    
    const [startAnimating, setstartAnimating] = useState(false);

    const navigate = useNavigate();


    useEffect(() => {
        if(startAnimating) {
            const timer = setTimeout(() =>{
                navigate('/login');
            }, 1500);
            return () => clearTimeout(timer)
        }
    }, [startAnimating, navigate
    ])
    

    const handleUploadFile = (event, type) => {
        const file = event.target.files[0];
        console.log(file);

        if (type === 'image') {
            setSignupData(prevState => ({
                ...prevState,
                image: file
            }));
        } else if (type === 'certificate') {
            setSignupData(prevState => ({
                ...prevState,
                certificate: file
            }));
        }
    };

    const handleImageClick = () => {
        ImageRef.current.click();
    };

    const handleCertificateClick = () => {
        CertificateRef.current.click();
    };



    const ImageRef = useRef(null);
    const CertificateRef = useRef(null);


// axios

const [signupData, setSignupData ] = useState({
    name:'',
    email:'',
    phone_number: '',
    username: '',
    image: null,
    certificate: null,
    password: '',
    password_confirmation: ''
})
 



const handleChange = (e) => {
    setSignupData({...signupData,
        [e.target.name]: e.target.value
    });
};



  const handleSubmitAxios = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', signupData.name);
        formData.append('email', signupData.email);
        formData.append('phone_number', signupData.phone_number);
        formData.append('username', signupData.username);
        formData.append('password', signupData.password);
        formData.append('password_confirmation', signupData.password_confirmation);

        if (signupData.image) {
            formData.append('image', signupData.image);
        }

        if (signupData.certificate) {
            formData.append('certificate', signupData.certificate);
        }

        try {
            const response = await axios.post('https://task5-ammar-allaw.trainees-mad-s.com/api/auth/Signup', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            } 
            
            
        );
        console.log('Response:', response.data); 

            if (response.data.status === 'success') {
                setstartAnimating(true)
                console.log("Done");
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Enter the values");
        }
    };






    return(
        <>
            <section className={`signup ${startAnimating ? "hidepage" : ''}`}>
            <div className="main-sign">
                <h2>إنشاء حساب</h2>
                    <div className="main-form">
                        <div className="form">
                            <form>
                            <div className="input">
                        <label htmlFor="name">الاسم</label>
                        <input type="text" name="name" id="name" value={signupData.name} onChange={handleChange}/>
                        </div>
                            <div className="input">
                        <label htmlFor="email">الايميل</label>
                        <input type="email" name="email" id="email" value={signupData.email} onChange={handleChange}/>
                        </div>
                        <div className="input">
                            <label htmlFor="username">اسم المستخدم</label>
                            <input type="text" name="username" id="username" value={signupData.username} onChange={handleChange}/>
                        </div>
                        <div className="input">
                            <label htmlFor="phone_number">رقم الهاتف</label>
                            <input type="text" name="phone_number" id="phone_number" value={signupData.phone_number} onChange={handleChange}/>
                        </div>
                        <div className="input">
                            <label htmlFor="password">كلمة المرور</label>
                            <input type="password" name="password" id="password" value={signupData.password} onChange={handleChange}/>
                        </div>
                        <div className="input">
                            <label htmlFor="password_confirmation">تأكيد كلمة المرور</label>
                            <input type="password" name="password_confirmation" id="password_confirmation" value={signupData.password_confirmation} onChange={handleChange}/>
                        </div>
                            </form>
                        </div>
                        <div className="info-box">
                    <div className="image-upload" onClick={() => handleImageClick('image')}>
                        <label htmlFor="uploadFile">الصورة الشخصية</label>
                        <input type="file" onChange={(e) => handleUploadFile(e, 'image')} style={{display: 'none'}} id="uploadFile" ref={ImageRef} />
                        
                        <p> اسحب و افلت الصورة هنا او قم برفعها من الملفات <a href="#" >  <BsUpload className="icon" /> </a> </p>
                        <span>الحجم الأقصى: 2MB</span>     
                    </div>
                    <div className="image-upload" onClick={() => handleCertificateClick('certificate')}>
                        <label htmlFor="">اثبات شخصية</label>
                        <input type="file" onChange={(e) => handleUploadFile(e, 'certificate')} style={{display: 'none'}} id="uploadFile"  ref={CertificateRef}/>
                        <p> اسحب و افلت الصورة هنا او قم برفعها من الملفات <a href="#" > <BsUpload className="icon" /> </a> </p>
                        <span>الحجم الاقصى: 1MB</span>
                    </div>
                    <div className="create-btn">

                        <Link to="verifyEmmail" onClick={handleSubmitAxios}  type="submit" className="button">إنشاء حساب</Link>
                        <p> لديك حساب؟ <Link to='/login'>تسجيل الدخول</Link></p>
                    </div>
                </div>   
                </div>
            <div className="line">
            <p className="text-line">أو</p>
            </div>
            <div className="icons">
            <ul>
                <li> <a href="#" className="icon facebook " > <span>Facebook </span><img src={facebookImg} alt="facebook-icon" /> </a> </li>
                <li > <a href="#" className="icon apple "><span> Apple </span><img src={appleImg} alt="Apple-icon" />  </a> </li>
                <li> <a href="#" className="icon google"> <span className="text-black">Google </span><img src={googleImg} alt="google-icon" /> </a> </li>
            </ul>
            </div>
            </div>
            </section>
        </>
    )
}

export default SignUp

