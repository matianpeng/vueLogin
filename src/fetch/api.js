import axios from 'axios'
import qs from 'qs'
import API from "@/configs/"
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout=3000;

//使用post时需要格式化参数   qs.stringify(data)
//登录
export const login = data =>{return axios.post(`${API.base}/sys/relogin`,qs.stringify(data));};
//获取列表
export const getUserMenu = () => {return axios.get(`${API.base}/sys/menu/displaynav`)}
