import { StrToEvalstr } from "../util";
import { VNode } from '../vnode/vnode';

export function Html(exp:string,vnode:VNode){
    let strEval=StrToEvalstr(exp);
    if(strEval.isconst)
        (vnode.statefulDom[0].dom as HTMLElement).innerHTML=strEval.exp;
    else{
        let watcher=vnode.mvvm.$CreateWatcher(vnode,strEval.exp,newvalue=>{
            (vnode.statefulDom[0].dom as HTMLElement).innerHTML=newvalue
        });
        (vnode.statefulDom[0].dom as HTMLElement).innerHTML=watcher.GetCurValue();
    }
}