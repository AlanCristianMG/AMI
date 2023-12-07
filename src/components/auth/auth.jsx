import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../css/auth.css';

// Componente de formulario de inicio de sesión
function LoginForm({ onSwitchToRegister }) {
  return (
    <form className='form'>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <input type="submit" value="Submit" />
      <button type="button" onClick={onSwitchToRegister}>
        Switch to Register
      </button>
    </form>
  );
}

// Componente de formulario de registro
function RegisterForm({ onSwitchToLogin }) {
  return (
    <form className='form'>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <input type="submit" value="Submit" />
      <button type="button" onClick={onSwitchToLogin}>
        Switch to Login
      </button>
    </form>
  );
}

// Componente principal de autenticación
const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="containerBack">
      <CSSTransition
        in={isLogin}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        {/* Enviar una función para cambiar el estado directamente */}
        <LoginForm onSwitchToRegister={() => setIsLogin(false)} />
      </CSSTransition>

      <CSSTransition
        in={!isLogin}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        {/* Enviar una función para cambiar el estado directamente */}
        <RegisterForm onSwitchToLogin={() => setIsLogin(true)} />
      </CSSTransition>
    </div>
  );
};

export default Auth;
