var nodePath = require("path");

exports.check = function (marko, markoCompiler, expect, snapshot, done) {
  var template = marko.load(nodePath.join(__dirname, "template.marko"));
  var result = template.renderToString({ name: "John" });
  snapshot(result);
  done();
};
