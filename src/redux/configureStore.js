if (process.env.REACT_WEBPACK_ENV === 'dist') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
