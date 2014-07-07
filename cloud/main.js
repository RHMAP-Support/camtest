var util = require('util');

exports.myServerFunction = function (params, callback) {
  console.log("In myServerFunction");
	console.log(JSON.stringify(params));
  
  console.log('function arguements display')
  console.log(params.functionArguments);

  console.log('the whole lot')
  console.log(params);

return callback(undefined, {});
//	return callback(undefined, JSON.stringify(params));
//	return callback(undefined, 'In myServerFunction');
};
