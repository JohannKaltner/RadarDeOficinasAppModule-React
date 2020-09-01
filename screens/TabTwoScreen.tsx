import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { Card, ListItem, Button, AirbnbRating, Divider } from 'react-native-elements'
import { listaOficinas } from '../services/chamadas';
import { useSelector } from 'react-redux';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TabTwoScreen(index) {
  const estado: any = useSelector(state => state);
  const props = index 
  const teste = () => {
 
  }
  return (
    <View style={styles.container}>
      <View>
           <Card
            containerStyle={styles.card}
            title={props.index.nome}
            image={require('../assets/images/NearGarage.png')}>
            <Text style={{ marginBottom: 10 }}>
            {props.index.cidade}, {props.index.bairro} - {props.index.rua}, {props.index.numero}
            </Text>
            <Button
              onPress={teste}
              icon={<Icon name='angle-up' color='#2fae69' />}
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'white' }}
              title=' Saiba Mais'
              titleStyle={{color:'#2fae69'}}
              />
          </Card>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card:{
    borderRadius:10
  },
  button: {
    width: "100%",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: "red",
  },
   
});
