// Componente de Inicio de Sesión
import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
  // Estado local para almacenar el correo electrónico y la contraseña ingresados por el usuario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función asincrónica para manejar el evento de inicio de sesión
  const handleLogin = async () => {
    try {
      // Realiza una solicitud HTTP POST al endpoint '/api/login' con las credenciales del usuario
      const response = await axios.get('http://localhost:3001', { email, password });

      // Extrae el token del objeto de respuesta
      const { token } = response.data;

      // Almacena el token en el almacenamiento local (localStorage) para mantener la sesión del usuario
      localStorage.setItem('token', token);

      // Llama a la función proporcionada como prop para manejar el inicio de sesión en el componente principal
      onLogin();
    } catch (error) {
      // Captura y maneja cualquier error que pueda ocurrir durante el inicio de sesión
      console.error('Error de inicio de sesión', error);
    }
  };

  // Renderiza el componente de inicio de sesión
  return (
    <div>
      <h2>Iniciar Sesión</h2>
      {/* Input para el correo electrónico con manejo del cambio en el estado local */}
      <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />

      {/* Input para la contraseña con manejo del cambio en el estado local */}
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />

      {/* Botón que desencadena la función handleLogin al hacer clic */}
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

// Exporta el componente para su uso en otros lugares de la aplicación
export default Login;
