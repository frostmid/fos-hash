var XXHash = require ('xxhash');

module.exports = function (str) {
	var hasher = new XXHash (0xCAFEBABE);
	hasher.update (new Buffer (str));
	return hasher.digest ();
};
