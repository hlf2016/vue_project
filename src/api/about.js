import base from './base'
import axios from '@/request/http'
// import qs from 'qs'

const about = {
  // 推荐
  recommend () {
    return axios.get(`${base.sq}/recommend`)
  },
  // 排行榜
  topList () {
    return axios.get(`${base.sq}/toplist`)
  }
}

export default about
