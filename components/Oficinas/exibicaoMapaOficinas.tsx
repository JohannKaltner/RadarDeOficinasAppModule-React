import React, { Component, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import MapView, { Marker } from 'react-native-maps'
import { useLinkProps } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { listaTodasOficinas } from '../../services/chamadas';
import { useSelector } from 'react-redux';
import { Text } from '../Themed';

export default function ExibicaoMapaOficinas(props) {

  const estado: any = useSelector(state => state);
  const [localAtual, setLocalAtual] = useState({latitude: 0, longitude:0})
  const oficinasCadastradas = estado.clickState.oficinas

  useEffect(() => {
    listaTodasOficinas()
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = position.coords.latitude 
      var long = position.coords.longitude 

      setLocalAtual({
        latitude: lat,
        longitude: long
      })
    })
  }, [])

 
  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      bottom: 0,
      height: 600,
      width: 500,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    map: {
      ...StyleSheet.absoluteFillObject
    }
  })


  return (
    <MapView
    style={styles.container}
    initialRegion={props.regiao}
    showsUserLocation={true}
    >
      { oficinasCadastradas && oficinasCadastradas.map(oficina => (
      <Marker
        key={oficina.id}
        pinColor="green"
        coordinate={{
            longitude: Number(oficina.longitude ) && Number(oficina.longitude ) ? Number(oficina.longitude ) : 0,
            latitude: Number(oficina.lattitude) && Number(oficina.lattitude ) ? Number(oficina.lattitude ) : 0
        }}
        title={oficina.nome}
        description={oficina.cidade}
      />
    ))}
    </MapView>
   );
}
