const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/p/hello-nextjs': {page: '/post', query: { id: "975" } },
      '/p/learn-nextjs': { page: '/post', query: { id: "975" } },
      '/p/deploy-nextjs': { page: '/post', query: { id: "975" } },
      '/p/exporting-pages': { page: '/post', query: { id: "975" } }
    }
  },
  webpack: function (config) {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8889,
        openAnalyzer: true
      }))
    }
  
    return config
  }
}
