// 定义初始化状态，reducer的结构
const initialState = {
  loading: true,
  error: false,
  articleList: [],
};

const LOAD_ARTICLES = 'LOAD_ARTICLES';
const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS';
const LOAD_ARTICLES_ERROR = 'LOAD_ARTICLES_ERROR';

/**
 *  export 与 export default的区别：
 *  import+(常量 | 函数 | 文件 | 模块)名的方式，将其导入，以便能够对其进行使用，
 *  但在一个文件或模块中，export、import可以有多个，export default仅有一个
 *  export 导入的时候带花括号，export default导入时不带花括号
 *
 */
export function loadArticles() {
  return {
    types: [LOAD_ARTICLES, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_ERROR],
    url: '/api/articles.json',
  };
}

export default function previewList(state = initialState, action) {

  switch (action.type) {
    case LOAD_ARTICLES: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case LOAD_ARTICLES_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        articleList: action.payload
      };
    }

    case LOAD_ARTICLES_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default:
      return state;
  }
}
