import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../Restricted/Restricted.css';

const Restricted = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const { t } = useTranslation();

  if (user.role !== 'manager') {
    navigate('/welcome');
    return null;
  }

  return (
    <div className='restricted'>
      <h2>{t('Restricted Page')}</h2>
      <p>{t('This page is only accessible by managers.')}</p>
    </div>
  );
};

export default Restricted;
