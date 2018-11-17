module.exports = {
    entry: __dirname + "/../src/main/index.ts", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/../dist/main",
        filename: "entry.js"
    },
    target: "electron-renderer",
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.tsx$/,
            use: {
                loader: "ts-loader"
            },
            exclude: /node_modules/
        }]
    }
};