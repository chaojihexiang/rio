import { DirectiveMVVM } from './../mvvm/directive-mvvm';
import { VNodeStatus } from '../const';
import { Mvvm } from '../mvvm/mvvm';
import { OnDataChange } from './../models';
import { VNode } from './../vnode/vnode';
import { CleanTarget, SetTarget } from './observer';


export class Watcher{
    private value:any
    private deepRecord:any[]=[]

    constructor(private mvvm:Mvvm|DirectiveMVVM,private vnode:VNode,public ExpOrFunc:string|Function,private cb:OnDataChange,private watchingArrayItem?:boolean){
        this.value=this.getValue()
        if(this.watchingArrayItem && toString.call(this.value)=="[object Array]"){
            for(let i=0;i<this.value.length;i++){
                this.deepRecord[i]=this.value[i]
            }
        }
    }
    private getValue(){
        SetTarget(this)
        let res=this.mvvm.$GetExpOrFunValue(this.ExpOrFunc)        
        CleanTarget()
        return res
    }
    /**用于返回当前缓存的值，主要针对computed */
    GetCurValue(){
        return this.value;
    }
    GetVNode(){
        return this.vnode
    }
    Update(){
        if(this.vnode.GetStatus()==VNodeStatus.ACTIVE){
            let newval=this.getValue()
            if(this.value!=newval){
                this.cb(newval,this.value)
                this.value=newval
            }else{
                //判断数组元素是否有变化
                if(this.watchingArrayItem && toString.call(this.value)=="[object Array]" ){
                    let diff=false
                    for(let i=0;i<newval.length;i++){
                        if(newval[i]!=this.deepRecord[i]){
                            this.cb(newval,this.value)
                            diff=true
                            break
                        }
                    }
                    if(diff){
                        this.deepRecord=[]
                        for(let i=0;i<newval.length;i++){
                            this.deepRecord[i]=newval[i]
                        }
                    }
                }
            }
        }
    }
}
