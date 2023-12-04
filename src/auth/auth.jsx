import React, { useState } from 'react';
import Login from '../components/login.jsx';
import Register from '../components/register.jsx';

const Auth = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    // Aquí deberías realizar la autenticación con un backend real
    setUser(username);
  };

  const handleRegister = (username) => {
    // Aquí deberías enviar la información del nuevo usuario a un backend real
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <h1>React Auth Template</h1>
      {user ? (
        <div>
          <p>Welcome, {user}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Login handleLogin={handleLogin} />
          <Register handleRegister={handleRegister} />
        </div>
      )}
    </div>
  );
};

export default Auth;
