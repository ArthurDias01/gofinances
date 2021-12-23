import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';


import theme from './src/global/styles/theme';
import { Dashboard } from './src/screens/Dashboard';
import { Register } from './src/screens/Register';
import React from 'react';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }


  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={'light-content'} backgroundColor={"#5636D3"} />
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
