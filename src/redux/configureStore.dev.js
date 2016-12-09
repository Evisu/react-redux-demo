import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer,routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

import createFetchMiddleware from 'redux-composable-fetch';
import ThunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import DevTools from './DevTools';

const FetchMiddleware = createFetchMiddleware({
  afterFetch({ action, result }) {
    return result.json().then(data => {
      return Promise.resolve({
        action,
        result: data,
      });
    });
  },
});

// 使用compose方法对createStore进行增强
const finalCreateStore = compose(
  // 使用applyMiddleware 可以让Redux解析各种类型的action
  applyMiddleware(
    ThunkMiddleware,
    FetchMiddleware,
    // 实现分发action的方法完成Redux应用的路由更新
    routerMiddleware(browserHistory)
  ),
  DevTools.instrument()
)(createStore);

// routerReducer实现了路由状态与Redux Store统一
const reducer = combineReducers({
  ...rootReducer,
  routing: routerReducer,
});

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);

  return store;
}
