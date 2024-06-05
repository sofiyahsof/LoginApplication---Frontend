import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../Login/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', { username: username, password });
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/welcome');
    } catch (error) {
      setError(t('Invalid username or password'));
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='login'>
      <h2>{t('Login')}</h2>     
      <form onSubmit={handleLogin}>
        <div className='form-group'>
          <label>{t('Username')}</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <label>{t('Password')}</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <p className="error">{error}</p>}
        <button className='login-button' type="submit">{t('Login')}</button>
      </form>
      <div className='language-buttons'>
        <button onClick={() => changeLanguage('en')}>{t('English')}</button>
        <button onClick={() => changeLanguage('zh')}>{t('Mandarin')}</button>
      </div>
    </div>
  );
};

export default Login;
