module.exports = function( grunt ) {
	var path = require('path');

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt/tasks/'),
    // Can optionally pass options to load-grunt-tasks.  If you set to false, it will disable auto loading tasks.
    loadGruntTasks: {
	    pattern: 'grunt-*',
	    config: require('./package.json'),
	    scope: 'devDependencies'
    }
  });

};
