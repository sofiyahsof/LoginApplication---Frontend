import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div>
      <h2>Welcome {user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Role: {user.role}</p>
      {user.role === 'manager' && <a href="/restricted">Access Restricted Page</a>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Welcome;