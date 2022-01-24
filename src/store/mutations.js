export const SET_RESULT = (state, fruits) => {
    state.apiResult = fruits;
}

export const CREATE_DROPDOWN = (state) => {
    let result = JSON.parse(JSON.stringify(state.apiResult))[0];
    state.dropDown = Object.keys(result.nutritions);
}

export const SEARCH_RESULT = (state, searchDetail) => {
    let allData = JSON.parse(JSON.stringify(state.apiResult));
    let type = searchDetail.type;
    if (searchDetail.searched.length === 0) {
        state.searchResult = allData;
    }
    else {
        let searchedData = allData.filter(fruits => fruits.nutritions[type] === Number(searchDetail.searched));
        state.searchResult = searchedData;
    }
}
