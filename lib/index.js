var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

var jqueryPath = require('path').dirname(require.resolve('jquery')) + '/jquery.js';
var cucumberReleasePath = require('path').dirname(require.resolve('cucumber')) + '/../release/cucumber.js';

var initKarmaCucumber = function(files) {
    files.unshift(createPattern(__dirname + '/adapter.js'));
    files.unshift(createPattern(jqueryPath));
    files.unshift(createPattern(cucumberReleasePath));
};

initKarmaCucumber.$inject = ['config.files'];

module.exports = {
  'framework:cucumberjs': ['factory', initKarmaCucumber]
};