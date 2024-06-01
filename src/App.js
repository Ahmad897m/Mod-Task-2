import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router , Routes, Route, HashRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import LogOut from './Pages/LogOut/LogOut';
import VerifyEmail from './Pages/VerifyEmail/VerifyEmail';
import { useState } from 'react';
import SignUp from './Pages/Signup/SignUp';

function App() {
  const [submitSource, setSubmitSource] = useState('');
  return (
    <>
        <Router>
        <Header  submitSource={submitSource} setSubmitSource={setSubmitSource} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login'  element={<LogIn  setSubmitSource={setSubmitSource} />} />
          <Route path='logout' element={<LogOut  setSubmitSource={setSubmitSource} />} />
          <Route path='signup/verifyEmmail' element={<VerifyEmail  setSubmitSource={setSubmitSource} />} />
          <Route path='signup' element={<SignUp/>} />

          </Routes>

        </Router>
    </>
  );
}

export default App;
