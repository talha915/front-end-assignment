export const checkSearchResult = (state)=> {
      if ((state.searchResult.length > 0) && (state.searchResult.length != state.apiResult.length)){
        state.checkResult = "Search Value Found";
      }
      else {
        state.checkResult = "All Results (Searched Value Not Matched)";
      }
      return state.checkResult;
}
