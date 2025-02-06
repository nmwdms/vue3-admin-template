//使用请求和响应拦截器
import axios from "axios";
import { ElMessage } from "element-plus";
import { de } from "element-plus/es/locales.mjs";

let request = axios.create({
    baseURL: '/api',
    timeout: 5000,
});

//请求拦截器
request.interceptors.request.use((config) => {
    return config
})
//响应拦截器
request.interceptors.response.use(
    (response)=>{
        return response.data
    },
    (error)=>{
        let message = '出错啦'
        ElMessage.error(message)
    }
)

export default request