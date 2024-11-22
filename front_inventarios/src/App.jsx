import React, { useEffect } from 'react';
import axiosInstance from './services/axiosConfig';

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('productos/');
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-center text-2xl font-bold text-green-500">
      Conexión a la API lista
    </div>
  );
};

export default App;
