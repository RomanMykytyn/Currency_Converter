export default function sortCurrency(list) {
  var listMyCarrency = JSON.parse(localStorage.getItem('myCarrency')) || [];
  list.forEach( el => listMyCarrency.indexOf(el.cc) >= 0 ? el.sortKey=0 : el.sortKey=1);
  list.sort( (a, b) => a.sortKey - b.sortKey);
  return [...list]
}
