import React from 'react';
import { View, Text } from 'react-native';
import useLocationData from '../hooks/geoData';

const LocationDisplay = () => {
  const { latitude, longitude } = useLocationData(); // Use o hook

  return (
    <View>
      {latitude !== null && longitude !== null ? (
        <Text>
          Latitude: {latitude}, Longitude: {longitude}
        </Text>
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
  );
};

export default LocationDisplay;