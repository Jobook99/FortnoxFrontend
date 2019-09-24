module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    /* output default to dist/main.js */
    /* entry default to src/index.js(x) */
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"],
                
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ] 
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
}