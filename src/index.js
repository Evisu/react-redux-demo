import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import routes from './routes';
import DevTools from './redux/DevTools';

// React Router 与 Redux Store绑定
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

/**
 *  React-Redux提供了一个组件和一个API帮助Redux和React进行绑定，
 *  一个是React组件<Provider/>,一个是connect()方法
 */
ReactDOM.render((
  <Provider store={store}>
    <div>
      {routes(history)}
      <DevTools />
    </div>
  </Provider>
), document.getElementById('app'));
