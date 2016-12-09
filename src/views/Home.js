import React from 'react';
import { connect } from 'react-redux';
import PreviewList from '../components/Home/PreviewList';
import { actions } from './HomeRedux';
import { push } from 'react-router-redux';

/**
 *  connect方法返回一个高阶组件生成器，这个生成器会基于原始组件生成一个全新的组件，
 *  并给这个组件添加额外的props
 *  第一个参数：
 *    接受完整的Redux状态树作为参数，返回当前组件相关部分的状态树，返回对象的key都会当成为组件的props
 *  第二个参数：
 *    接受Redux的dispatch方法作为参数，返回当前组件相关部分的action creator，并可以在这里将action creator与dispatch绑定，
 *    减少冗余代码
 *
 */
@connect(state => {
  return {
    articleList: state.home.previewList.articleList,
    loading : state.home.previewList.loading
  };
}, {
  push,
  ...actions,
})

class Home extends React.Component {
  render() {
    const { loadArticles, articleList, push,loading } = this.props;

    return (
      <div>
        <h1>Home</h1>
        <PreviewList {...this.props} />
      </div>
    );
  }
}

export default Home;
