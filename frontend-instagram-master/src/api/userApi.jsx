import axios from 'axios';

export const registrar = async ({ nombre, apellido, username, correo, password }) => {
  const res = await axios.post('http://localhost:3000/api/user', {
    nombre,
    apellido,
    username,
    correo,
    password
  });
  return res.data;
};