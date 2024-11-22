import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // Aqui va el link de la api...
  headers: {
    'Content-Type': 'application/json'
  },
})

const adminLogin = async (username, password) =>{
  try {
    const response = await axios.post(
      'http://localhost:8080/admin-login',
      { username, password },
      { withCredentials: true }

    )
    console.log(response.data.message)
  } catch (error) {
    console.error('error en la autenticacion', error.response.data);
  }
}

adminLogin('superuser', 'superpassword')

export default axiosInstance
