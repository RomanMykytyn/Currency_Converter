import sortCurrency from '../utils/sortCurrency';


export function loadData() {

  return (dispatch) => {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((items) => {dispatch({type: 'LIST_UPDATE', listCurrencys: sortCurrency(items)})})
            .catch((err) => console.log(err));
  }
}
