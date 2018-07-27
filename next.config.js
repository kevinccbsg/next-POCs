
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
  }
}
