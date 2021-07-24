import axios from 'axios'

console.log('环境变量下的baseURL', process.env.VUE_APP_BASEURL)
const request = axios.create({
  baseURL:'/api',
  headers:{
    'Content-Type':'application/x-www-from-urlencoded'
  },
  settimeout: 2000
})

// 配置发送请求前的拦截
request.interceptors.request.use(
  config => {
    console.log('请求的数据', config)
    return config
  },
  error => {
    return Promise.reject('请求出错', error)
  }
)

// 配置响应拦截
request.interceptors.response.use(
  response => {
    console.log('返回的数据', response)
    return response
  },
  error => {
    return Promise.reject('响应出错', error)
  }
)

export default request