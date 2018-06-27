import { VinallaNode } from './../vnode/vinalla-node';
import {REG_EVENT, REG_STR} from "../const"
export function OnClick(exp:string,vnode:VinallaNode,isconst:boolean){
    if (REG_EVENT.test(exp)) {
        let methodStr = RegExp.$1
        let paramsStr = RegExp.$2
        if (paramsStr.length > 0) {
            let ps = paramsStr.split(",")
            vnode.DomSet[0].dom.addEventListener("click", () => {
                let params: any[] = []
                ps.forEach(p => {
                    if (!REG_STR.test(p)) {
                        if (p === "true") {
                            params.push(true)
                            return
                        }
                        if (p === "false") {
                            params.push(false)
                        }
                        let n = new Number(p).valueOf()
                        if (!isNaN(n)) {
                            params.push(n.valueOf())
                        } else {
                            //肯定是本地变量
                            params.push(vnode.mvvm.$GetExpOrFunValue(p))
                        }
                    } else {
                        params.push(RegExp.$2)
                    }
                })
                vnode.mvvm.$RevokeMethod(methodStr, ...params)
            })
        }else{
            vnode.DomSet[0].dom.addEventListener("click", () => {
                vnode.mvvm.$RevokeMethod(methodStr)  
            })
        }
    }
}