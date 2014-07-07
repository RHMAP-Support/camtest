var util = require('util');

exports.myServerFunction = function (params, callback) {
    console.log("In myServerFunction");
	console.log(JSON.stringify(params));
	return callback(undefined, JSON.stringify(params));
//	return callback(undefined, 'In myServerFunction');
};
