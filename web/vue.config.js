module.exports = {
  devServer: {
    port: 8080,
    host: 'localhost',
    open: true,
    https: false,
    proxy: {
      '/api': {
        target: 'http://localhost:12138/', // 设置了代理，在封装axios的时候 baseURL就不用设置了，直接为''如果发送页面不想写/api，那么在baseURL加上'/api'
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }

  }
}