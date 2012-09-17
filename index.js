Buffer = require('buffer').Buffer
TBinaryProtocol = require('thrift/lib/thrift/protocol').TBinaryProtocol

TBinaryProtocol.prototype.writeString = function(str) {
  str = new Buffer(str).toString('binary')
  this.writeI32(str.length);
  this.trans.write(str);
}

TBinaryProtocol.prototype.readString = function() {
  var r = this.readBinary().toString('utf8');
  return r;
}
