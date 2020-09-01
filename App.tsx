import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux'
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {Armazenado} from './services/store/store'
import { NavigationContainer } from '@react-navigation/native';
import TabOneScreen from './screens/TabOneScreen';
import ExibicaoPrincipal from './screens/ExibicaoPrincipal'
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {  
  
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const Stack = createStackNavigator();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={Armazenado}>
       <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
      </Provider>
     );
  }
}
