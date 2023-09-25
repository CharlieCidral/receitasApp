import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Lista from './src/Lista';
import Receitas from './src/Receitas';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}
      >
        <Stack.Screen name="Lista de Receitas" component={Lista} />
        <Stack.Screen
          name="Receitas"
          component={Receitas}
          options={{ presentation: 'transparentModal',  cardOverlayEnabled: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}