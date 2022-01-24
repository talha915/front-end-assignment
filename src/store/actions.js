import Fruits from '../api/Fruits';

export const getResult=({commit})=>{
    Fruits.all_fruits()
    .then(response => {
        commit('SET_RESULT', response.data);
        commit('CREATE_DROPDOWN');
    })
}

export const searchResults=({commit}, search)=> {
    commit('SEARCH_RESULT', search);
}
