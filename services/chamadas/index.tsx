import { rotaOficinas, rotaTodasOficinas, rotaTodosBairros} from "../constants/rotasApi";
import { CLICK_UPDATE_LISTA_OFICINAS, CLICK_UPDATE_OFICINAS_VISIBLE, ZERA_OFICINAS, LISTA_BAIRROS} from '../action/action_types'
import { Armazenado } from '../store/store'
import axios from 'axios'
import Axios from "axios";

export const Zera = () => {
  Armazenado.dispatch({ type: ZERA_OFICINAS, })
}

export const listaOficinas = (pagina) => {
  Zera()
  const page = '?page=' + pagina
  axios.get(rotaOficinas + page,)
    .then((res => {
      const oficinas = res.data
      const arranjo: any = []
      let totalOficinas = oficinas.length
      for (let i = 0; i < totalOficinas; i++) {
        arranjo.push({
          nome: oficinas[i].nome,
          numero: oficinas[i].numero,
          bairro: oficinas[i].bairro,
          cep: oficinas[i].cep,
          cidade: oficinas[i].cidade,
          cnpj: oficinas[i].cnpj,
          compania: oficinas[i].compania,
          criadoEm: oficinas[i].criadoEm,
          ddd: oficinas[i].ddd,
          estado: oficinas[i].estado,
          id: oficinas[i].id,
          id_usuario: oficinas[i].id_usuario,
          lattitude: oficinas[i].lattitude,
          longitude: oficinas[i].longitude,
          rua: oficinas[i].rua,
          telefone1: oficinas[i].telefone1,
          telefone2: oficinas[i].telefone2
        })
      }
      Armazenado.dispatch({
        type: CLICK_UPDATE_OFICINAS_VISIBLE,
        oficinasVisible: true
      })
      
      
      Armazenado.dispatch({
        type: CLICK_UPDATE_LISTA_OFICINAS,
        oficinas: arranjo
      })
    })).catch((err => {
      console.log(err)
    }))
} 

export const listaTodasOficinas = () => {
  Zera()
  axios.get(rotaTodasOficinas)
    .then((res => {
      const oficinas = res.data
      const arranjo: any = []
      let totalOficinas = oficinas.length
      for (let i = 0; i < totalOficinas; i++) {
        arranjo.push({
          nome: oficinas[i].nome,
          numero: oficinas[i].numero,
          bairro: oficinas[i].bairro,
          cep: oficinas[i].cep,
          cidade: oficinas[i].cidade,
          cnpj: oficinas[i].cnpj,
          compania: oficinas[i].compania,
          criadoEm: oficinas[i].criadoEm,
          ddd: oficinas[i].ddd,
          estado: oficinas[i].estado,
          id: oficinas[i].id,
          id_usuario: oficinas[i].id_usuario,
          lattitude: oficinas[i].lattitude,
          longitude: oficinas[i].longitude,
          rua: oficinas[i].rua,
          telefone1: oficinas[i].telefone1,
          telefone2: oficinas[i].telefone2
        })
      }
      Armazenado.dispatch({
        type: CLICK_UPDATE_OFICINAS_VISIBLE,
        oficinasVisible: true
      })
      Armazenado.dispatch({
        type: CLICK_UPDATE_LISTA_OFICINAS,
        oficinas: arranjo
      })
    })).catch((err => {
      console.log(err)
    }))
} 

export function GetAllBairros() {

  Axios.get(rotaTodosBairros)
  .then((res => {
    //alert('foi')
     const lista = res.data
     console.log(lista)
     Armazenado.dispatch({type: LISTA_BAIRROS, bairros : lista})
    }))
}