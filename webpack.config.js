const webpack = require("webpack");
const path = require("path");
const NameAllModulesPlugin = require("name-all-modules-plugin");

module.exports = {
  target: "web",
  mode: "development",
  entry: "./src/entry.jsx",
  output: {
    path: path.resolve(`./dist`),
    filename: "[name].js",
    chunkFilename: "main.[name].js",
    publicPath: "/static"
  },
  optimization: {
    runtimeChunk: true
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        exclude: /(node_modules)\//,
        test: /\.jsx?$/,
        query: {
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-syntax-decorators",
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-transform-classes",
            "@babel/plugin-proposal-object-rest-spread"
          ],
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  ie: "11",
                  chrome: "56",
                  safari: "10"
                },
                useBuiltIns: "usage"
              }
            ],
            "@babel/preset-react"
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
      Component: ["react", "Component"]
    })
  ]
};
