import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../Welcome/Welcome.css';

const Welcome = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className='welcome'>
      <h2>{t('Welcome')} {user.name}!</h2>
      <p>{t('Username')}: {user.username}</p>
      <p>{t('Role')}: {user.role}</p>
      {user.role === 'manager' && <a href="/restricted">{t('Access Restricted Page')}</a>}
      <button className='logout-button' onClick={handleLogout}>{t('Logout')}</button>
    </div>
  );
};

export default Welcome;