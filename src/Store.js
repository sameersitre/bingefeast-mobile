/*
  * Author: Sameer Sitre
  * https://www.linkedin.com/in/sameersitre/
  * https://github.com/sameersitre
  * File Description:  
 */
// if (__DEV__) {
//   import('../ReactotronConfig').then(() => console.log('Reactotron Configured'))
// }
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import appReducer from "./containers/reducers";

import Reactotron from '../ReactotronConfig'  //comment out on production

const initialState = {};
const middleware = [thunk];
const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

const store =
  createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      Reactotron.createEnhancer(),   //comment out on production
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()   //comment out on production
    )
  )
export default store;