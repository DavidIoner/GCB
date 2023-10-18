import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './src/components/mapa'; // Importe o componente de mapa
import LocationDisplay from './src/components/teste';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Mapa" component={MapScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
