
import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator, StyleSheet, FlatList } from "react-native";
import axios from 'axios'
import TabTwoScreen from '../../screens/TabTwoScreen'
import { listaOficinas } from '../../services/chamadas';
import { Armazenado } from '../../services/store/store'
import { CLICK_UPDATE_CARREGA_LISTA } from '../../services/action/action_types'
import { useSelector } from 'react-redux';
import { Text } from '../Themed';

export default function ExibicaoListaOficinas() {

  const estado: any = useSelector(state => state);
  const [loadingMore, setLoadingMore] = useState(false)
  const [pagina, setPagina] = useState(1)
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const oficinasCadastradas = estado.clickState.oficinas
  //var pagina = 1;

  // carrega mais itens
  const _handleLoadMore = async() => {
    await setPagina(prevState => prevState + 1) 
    console.log(pagina)
    await listaOficinas(pagina)
    setLoadingMore(true)
  };
  // carregando no radapé
  const _renderFooter = () => {
    if (!loadingMore) return null;
    return (
      <ActivityIndicator size="large" color="#8c52ff" />
    );
  };

  // quando o usuário puxa para baixo 
  const _handleRefresh = () => {
      setPagina(1)
      listaOficinas(1)
  };

  useEffect(() => {
    listaOficinas(pagina)
   }, [])


   return (
           <FlatList
            ListFooterComponent={_renderFooter}
            numColumns={1}
            contentContainerStyle={{
              flexDirection: 'column'
            }}
            data={estado.clickState.oficinas}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View
                style={{ width: '100%' }}>
                <TabTwoScreen index={item} pagina={pagina} />
              </View>
            )}
            onEndReached={_handleLoadMore}
            onEndReachedThreshold={0.1}
            initialNumToRender={10}
            onRefresh={_handleRefresh}
            refreshing={refreshing}
          />      
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  breadcrumbs: {
     alignItems: 'center',
  }
});
