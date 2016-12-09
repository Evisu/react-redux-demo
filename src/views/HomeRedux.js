/**
 *  包含了Home页面所有组件相关的reducer及actionCreator
 *
 */
import { combineReducers } from 'redux';

// 引入 reducer 及 actionCreator
import previewList, { loadArticles } from '../components/Home/PreviewListRedux';

// 默认导出当前路由需要的所有的reducer的集合
export default combineReducers({
  previewList
});

export const actions = {
  loadArticles
};
