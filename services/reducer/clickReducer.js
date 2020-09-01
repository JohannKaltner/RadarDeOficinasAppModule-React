const {
   CLICK_UPDATE_LISTA_OFICINAS,
   CLICK_UPDATE_OFICINAS_VISIBLE,
   CLICK_UPDATE_CARREGA_LISTA,
   CLICK_UPDATE_VISAO,
   ZERA_OFICINAS,
   LISTA_BAIRROS,
   BAIRRO_SELECIONADO
   } = require("../action/action_types");

 
const INITIAL_STATE = {
  oficinas: [],
  bairros: [],
  bairroSelecionado: '',
  oficinasVisible: false,
  visao:'Mapa'
};

export const clickReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VISAO:
      return{
        ...state,
        visao:action.visao
      }
   case CLICK_UPDATE_LISTA_OFICINAS:
   return {
     ...state,
        oficinas: action.oficinas
     };
     case CLICK_UPDATE_OFICINAS_VISIBLE:
     return {
       oficinasVisible:action.oficinasVisible
     }
     case CLICK_UPDATE_CARREGA_LISTA:
       return {
        ...state,
          pagina : action.pagina
       }
      case ZERA_OFICINAS:
        return{
          ...state,
          oficinas: []
        }
      case LISTA_BAIRROS:
        console.log(action.bairros, 'foi aqui')
        return{
          ...state,
          bairros: action.bairros
        }
      case BAIRRO_SELECIONADO:
        return{
          ...state,
          bairroSelecionado: action.selecionado
        }
    default:
      return state
  }
};