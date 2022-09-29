const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
require("webpack");
module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "script.js",
        path: path.resolve(__dirname, "dist"),
    },
});