import { IComponentMvvm, Event, DomStatus } from './../models';
import { RegisterComponent, GetDomTree } from '../manager/components-manager';
import { ComponentOption, Prop } from '../models';
import { FetchProperty } from './property';
import { VNode } from '../vnode/vnode';
import { NewVNode } from '../vdom/vdom';



export function Component(option:ComponentOption){
    checkComponentOption(option)
    let res=FetchProperty()
    return function(target:IComponentMvvm){
        let constructor= class $ComponentMvvm extends target{
            $InitFuncs:string[]=res.initFuncs
            $MountFuncs:string[]=res.mountFuncs
            $DestroyFuncs:string[]=res.destroyFuncs
            
            $initialize(){
                super.$initialize()
                this.$InitFuncs.forEach(init=>{
                    (this as any)[init].call(this)
                })
            }
            $Render():DomStatus{
                let domstatus=super.$Render();
                this.$MountFuncs.forEach(func=>{
                    (this as any)[func].call(this)
                });
                return domstatus;
            }
            $OnDestroy(){
                super.$OnDestroy()
                this.$DestroyFuncs.forEach(destroy=>{
                    (this as any)[destroy].call(this)
                })
            }
            $InitTreeroot():VNode{
                let domtree=GetDomTree(this.$InitName(),this.$InitNamespace())
                if(domtree==null){
                    throw new Error("not found template or templateUrl for component "+this.$InitName()+" in "+this.$InitNamespace())
                }
                
                let vnode=NewVNode(domtree,this,null)
                return vnode
            }
            $InitNamespace(): string {
                return option.namespace
            }
            $InitDataItems(): {name:string,value:any}[] {
                let datas:{name:string,value:any}[]=[]
                res.datas.forEach(item=>{
                    datas.push({name:item,value:(this as any)[item]})
                })
                return datas
            }
            $InitComputeItems(): { name: string; get: () => any }[] {
                return res.computes
            }
            $InitName():string{
                return option.name
            }
            $InitIns():Prop[]{
                return res.props
            }
            $InitOuts():Event[]{
                return option.events
            }
        }
        RegisterComponent(option.name,option.namespace,constructor,option)
    }
}


function checkComponentOption(option:ComponentOption){
    option.namespace=option.namespace?option.namespace:"default"
    option.events=option.events?option.events:[]
}

