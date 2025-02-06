import SvgIcon from './SvgIcon/index.vue'

const allGlobalComponent = {SvgIcon}
//匿名导出
export default {
    install(app){
        Object.keys(allGlobalComponent).forEach(key=>{
            console.log(key)
            app.component(key,allGlobalComponent[key])
        })
    }
}