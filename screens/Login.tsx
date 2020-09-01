import React from 'react'
import { View, Text } from '../components/Themed'
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export default function PaginaDeLogin() {

  return (
    <View style={styles.container}>   
      <Input
      style={styles.input}
        placeholder='Email'
        leftIcon={{ type: 'font-awesome', name: 'at' }}
      />

      <Input
        placeholder='Senha'
        leftIcon={ <Icon name='lock' size={24} color='black'/>}
      />
  
    </View>
  )
}

const styles = StyleSheet.create({
  input : {
    marginBottom: '15px'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

