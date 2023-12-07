const cors = require('cors');
const express = require('express');
const mysql = require('mysql');
const app = express();

const tabla = 'roles_usuario';

// Habilitar CORS para permitir las peticiones entre diferentes dominios(puertos)
app.use(cors());


// Configurar la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',  // Dirección del servidor de la base de datos
  user: 'root',       // Nombre de usuario de la base de datos
  password: '',       // Contraseña de la base de datos
  database: 'domo',   // Nombre de la base de datos
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    // Si hay un error en la conexión, imprimirlo en la consola y detener la aplicación
    console.error('Error de conexión a la base de datos:', err);
    process.exit(1); // Detener la aplicación en caso de error
  } else {
    // Si la conexión es exitosa, imprimir un mensaje de éxito en la consola
    console.log('Conexión exitosa a la base de datos');
  }
});

// Definir una ruta para manejar solicitudes GET a la raíz del servidor
app.get('/', (req, res) => {
  // Construir una consulta SQL para seleccionar todos los registros de la tabla especificada
  const sql = `SELECT * FROM ${tabla}`;

  // Ejecutar la consulta en la base de datos
  db.query(sql, (err, result) => {
    if (err) {
      // Si hay un error en la consulta, imprimirlo en la consola y enviar un mensaje de error al cliente
      console.error('Error en la consulta:', err);
      res.status(500).send('Error en el servidor');
    } else {
      // Si la consulta es exitosa, enviar los resultados al cliente en formato JSON
      res.json(result);
    }
  });
});

// Definir el puerto en el que el servidor escuchará las solicitudes
const PORT = process.env.PORT || 3001;

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(PORT,()=>{ console.log(`Servidor en el puerto ${PORT}`); });
