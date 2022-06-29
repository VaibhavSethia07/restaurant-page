const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    // Whatever name we write here will go in the name variable
    bundle: path.resolve(__dirname, "/src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    // For caching every asset will have a hash
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    // Specify from where to serve the files
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    // port 3000 for the frontend work
    port: 8000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Foodie",
      filename: "index.html",
      template: "src/templates/template.html",
    }),
  ],
};
