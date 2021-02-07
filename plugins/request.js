/**
 * 基于 axios 封装的请求模块
 */
import axios from 'axios'
export const request = axios.create({
    baseURL: "https://conduit.productionready.io"
})

export default ({
    store
}) => {



    request.interceptors.request.use(function (config) {
        const {
            user
        } = store.state
        if (user && user.token) {
            config.headers.Authorization = `Token ${user.token}`
        }
        return config
    }, function (err) {
        return Promise.reject(err)
    })


}
// export default request