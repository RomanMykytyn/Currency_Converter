import { combineReducers } from 'redux';


function listCurrencys(state = [], action) {
    switch (action.type) {
        case 'LIST_UPDATE':
            return action.listCurrencys;

        default:
            return state;
    }
}

export default combineReducers({
    listCurrencys: listCurrencys
});
