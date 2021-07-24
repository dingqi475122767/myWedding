import request from '@/utils/request'

export function getSomething(params) {
  return request({
    url:'/wedding/dingqi',
    method:'get',
    params
  })
}
