
module.exports = {
    entry: './src/main/js/app.js',
    // devtool: 'sourcemaps',
    cache: true,
    debug: true,
    output: {
        filename: './src/main/resources/static/built/bundle.js'
    },
    // watch: true,
    module: {
        rules: [
            {
                test: /\.coffee$/,
                use: [ 'coffee-loader' ]
            }
        ],
        loaders: [
            {
                test:  /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            },
             {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css'
            }
        ],
    }
};