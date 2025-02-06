import { defineStore } from "pinia";
import { reqLogin } from "@/api/user";
import type { loginForm } from "@/api/user/type";
import { SET_TOKEN, GET_TOKEN } from "../../utils/token";

let useUserStore = defineStore('User', {
    state: () => {
        return {
            token: GET_TOKEN(),
        }
    },
    actions:{
        async userLogin(data:loginForm){
            let result = await reqLogin(data);
            if(result.code==200) {
                this.token = result.data.token;
                SET_TOKEN(result.data.token)
                return 'ok'
            }
            else{
                return Promise.reject(new Error(result.data.message))
            }
        }
    },
    getters:{

    }
})

export default useUserStore;