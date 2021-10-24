import { devToolsEnhancer } from 'redux-devtools-extension';
import { createStore } from "redux";
import openReducer from './Reducer/music'
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
    openReducer,
    composeWithDevTools
  );
export default store;