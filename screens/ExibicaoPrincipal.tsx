
import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator, StyleSheet, FlatList, Picker } from "react-native";
import axios from 'axios'
import TabTwoScreen from './TabTwoScreen'
import { listaOficinas, GetAllBairros } from '../services/chamadas';
import { Armazenado } from '../services/store/store'
import { CLICK_UPDATE_CARREGA_LISTA, BAIRRO_SELECIONADO} from '../services/action/action_types'
import { useSelector } from 'react-redux';
import { Text } from '../components/Themed';
import ExibicaoListaOficinas from '../components/Oficinas/exibicaoListaOficinas';
import ExibicaoMapaOficinas from '../components/Oficinas/exibicaoMapaOficinas';
import { Button, ButtonGroup } from 'react-native-elements';

export default function InfinitLoading() {

  const estado: any = useSelector(state => state);
  const visao = estado.clickState.visao
  const [selectedIndex, setIndex] = useState(0)

const updateIndex = (selectedIndex) => {
setIndex(selectedIndex)
  }

  useEffect(() => {
    GetAllBairros()
  }, [])
  

  
const component1 = () => <Text>Mapa</Text>
const component2 = () => <Text>Lista</Text>

const regiao = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.015,
  longitudeDelta: 0.0121,
}

let apresentar:any
if(selectedIndex === 0){
  apresentar = <ExibicaoMapaOficinas data={regiao} />
} else if(selectedIndex === 1){
  apresentar =  <ExibicaoListaOficinas />
}
 
const buttons = [{ element: component1 }, { element: component2 }]
  return (

    <View style={styles.container}>
      <View style={styles.exibicao}>
        <ButtonGroup
          onPress={updateIndex}
          buttonStyle={{ borderRadius:10}}
          selectedTextStyle={{ color: '#2fae69' }}
          selectedButtonStyle={{ backgroundColor: '#2fae69', borderRadius:1 }}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 40, width: 200, borderRadius:10}} 
          />

        <Picker
        selectedValue={estado.clickState.bairroSelecionado && estado.clickState.bairroSelecionado}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => Armazenado.dispatch({type: BAIRRO_SELECIONADO, selecionado: itemValue })}
      >
        {console.log(estado.clickState.bairros)}
        {
          estado.clickState.bairros && estado.clickState.bairros.map((bairroLista) => {
             <Picker.Item label={bairroLista.bairro} value={bairroLista.bairro} />
            })
          }
          <Picker.Item label={'fodase'}/>
         
      </Picker>
      </View>
      <View style={styles.lista}>
        {apresentar}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
    width:'100%',
  },
  exibicao:{
    backgroundColor:'white',
    marginTop:50,
    width:'100%',
    elevation: 1
  },
  lista:{
    height:'100%',
    width:'100%'
  },
  breadcrumbs: {
    alignItems: 'center',
  }
});
