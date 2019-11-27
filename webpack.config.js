module.exports = {
    entry: {
        index: './src/index.js',
    },
    target: 'node',
    mode: process.env.NODE_ENV || 'production',
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].js',
        libraryTarget: 'commonjs',
    },
};