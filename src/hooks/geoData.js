import { useState, useEffect } from 'react';

const useLocationData = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://getpost.onrender.com/api/data');
        if (response.ok) {
          const data = await response.json();
          if (data.latitude && data.longitude) {
            setLatitude(data.latitude);
            setLongitude(data.longitude);
          }
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    const intervalId = setInterval(fetchData, 1000);

    // Limpeza do intervalo quando o componente for desmontado
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return { latitude, longitude };
};

export default useLocationData;
