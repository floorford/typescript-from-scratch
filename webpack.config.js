const path = require("path"); //es5 import syntax - path built in with node
const rules = [
  {
    test: /\.tsx?/, //regex for all files ending in .tsx
    exclude: /node_modules/, // ignore these files
    loader: "babel-loader", // use babel loader to load the test files
  },
];

// same as writing export/import in normal files, but node reads this and doesn't use ES6 onwards
module.exports = {
  target: "web", // where we want to export our code to
  mode: "development", // compiles it according to use
  entry: "./src/index.tsx", // where the entrypoint of our code is
  output: {
    path: path.resolve(__dirname, "dist"), // directory we want to create
    filename: "bundle.js", // file name it will compile the code to
  },
  module: { rules },
  resolve: {
    extensions: [".ts", ".tsx", ".js"], // allows us to emit the file extensions in our import statements
  },
  devServer: {
    contentBase: "./", // gets content from the root
    port: 5000, // where it exports the code to
    open: true, // open browser when server running
  },
};
