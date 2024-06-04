// src/components/Restricted.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Restricted = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  if (user.role !== 'manager') {
    navigate('/welcome');
    return null;
  }

  return (
    <div>
      <h2>Restricted Page</h2>
      <p>This page is only accessible by managers.</p>
    </div>
  );
};

export default Restricted;
