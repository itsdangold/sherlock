module.exports = {
    plugins: [
        require('postcss-import'),
        require('precss'),
        require('autoprefixer'),
        require('cssnano')({
            preset: ['default', {
                minifyFontValues: {
                    removeQuotes: false
                },
                normalizeUrl: false
            }]
        })
    ],
};