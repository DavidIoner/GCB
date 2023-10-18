import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import useLocationData from '../hooks/geoData';

const MapScreen = () => {
  const [markers, setMarkers] = useState([]);
  const { latitude, longitude } = useLocationData();

  // Coordenadas centralizadas em Ponta Grossa, PR, Brasil
  const initialRegion = {
    latitude: -25.0916,
    longitude: -50.1668,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  useEffect(() => {
    // Verifique se a latitude e a longitude são nulas e atribua valores padrão se forem
    const defaultLatitude = latitude || initialRegion.latitude;
    const defaultLongitude = longitude || initialRegion.longitude;

    const jsonData = [
      {
        id: 1,
        latitude: defaultLatitude,
        longitude: defaultLongitude,
        title: 'Localização 1',
        description: 'Descrição do local 1',
      }
    ];

    setMarkers(jsonData);
  }, [latitude, longitude]); // Certifique-se de observar as alterações em latitude e longitude

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
