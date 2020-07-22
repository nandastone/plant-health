/* eslint-disable no-undef */
// Inside vue.config.js
module.exports = {
    pwa: {
        iconPaths: {
            favicon32: 'img/favicon.ico',
            favicon16: 'img/favicon.ico',
            appleTouchIcon: 'img/favicon.ico',
            maskIcon: 'img/favicon.ico',
            msTileImage: 'img/favicon.ico',
        },
    },
    chainWebpack: config => {
        const svgRule = config.module.rule('svg');

        svgRule.uses.clear();

        svgRule
            .use('babel-loader')
            .loader('babel-loader')
            .end()
            .use('vue-svg-loader')
            .loader('vue-svg-loader');
    },
};
