import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
    <div>
      <h2>{t('Login')}</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>{t('Username')}</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>{t('Password')}</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">{t('Login')}</button>
      </form>
      <button onClick={() => changeLanguage('en')}>{t('English')}</button>
      <button onClick={() => changeLanguage('zh')}>{t('Mandarin')}</button>
    </div>
  );
};

export default Login;
