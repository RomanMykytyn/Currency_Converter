import sortCurrency from '../utils/sortCurrency';
import store from '../main'


export function selectMyCurrency(code) {
  return (dispatch) => {
    let listMyCarrency = JSON.parse(localStorage.getItem('myCarrency')) || [];
    let codeIndex = listMyCarrency.indexOf(code);
    if (codeIndex >= 0) {
      listMyCarrency.splice(codeIndex, 1);
    }
    else {
      listMyCarrency.push(code);
    }
    localStorage.setItem('myCarrency', JSON.stringify(listMyCarrency));
    dispatch({type: 'LIST_UPDATE', listCurrencys: sortCurrency(store.getState().listCurrencys)})
  }
}
