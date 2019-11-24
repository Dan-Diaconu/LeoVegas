const path = require("path")

module.exports = {
  entry: "./src/index.js",
  rule: [
    {
      test: /\.js$/, // rule for .js files
      exclude: /node_modules/,
      loader: "babel-loader" // name of the loader
    },
    {
      test: /\.css$/,
      use: [
        "style-loader", // order is important !
        "css-loader"
      ] // this is loaded first
    }
  ],
  output: {
    filename: "vegas.js",
    path: path.resolve(__dirname, "dist")
  }
}
