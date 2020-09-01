import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import ExibicaoPrincipal from '../screens/ExibicaoPrincipal';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList } from '../types';
import PaginaDeLogin from '../screens/Login';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Inicio"
      tabBarOptions={{ activeTintColor: '#2fae69' }}>
      <BottomTab.Screen
        name="Inicio"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={'#2fae69'} />,
        }}
      />
      <BottomTab.Screen
        name="Oficinas"
        component={ExibicaoPrincipalNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-car" color={'#2fae69'} />,
        }}
      />
       <BottomTab.Screen
        name="Perfil"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-person" color={'#2fae69'} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Inicio',headerStyle: { backgroundColor: '#2fae69' }, headerTitleStyle: { color: 'white' } }} 
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function ExibicaoPrincipalNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Oficinas"
        component={ExibicaoPrincipal}
        options={{ headerTitle: 'Oficinas', headerStyle: { backgroundColor: '#2fae69' },headerTitleStyle: { color: 'white' } }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeNavigation"
        component={PaginaDeLogin}
        options={{ headerTitle: 'Teste',headerStyle: { backgroundColor: '#2fae69' }, headerTitleStyle: { color: 'white' } }}  
      />
    </TabThreeStack.Navigator>
  );
}
