const webpack = require("webpack");
const config = require("./webpack.config.js");

webpack(config, function(err, stats) {
  if (err) {
    throw err;
  }
  stats
    .toString({
      modules: false,
      cached: false,
      chunks: false
    })
    .split("\n")
    .map(line => {
      console.log("[webpack]", line);
    });
});
