import { ComponentMvvmFactoryOption, ComponentOption } from '../models';
import { HttpGet, LogError } from "../util";
import { Parse } from '../vdom/parser';
import { IComponentMvvm } from './../models';

let repository:{[id:string]:ComponentMvvmFactoryOption}={}


export function Id(namespace:string,name:string){
    return namespace+"::"+name;
}

export function RegisterComponent(name:string,namespace:string,constructor:IComponentMvvm,option:ComponentOption) {
    let factoryOption:ComponentMvvmFactoryOption={
        $constructor:constructor,
        $id:Id(namespace,name),
        $preProcess:false,
        $domtree:null,
        $origin:option
    }
    if(repository[factoryOption.$id]!=null)
        throw new Error("component "+factoryOption.$id+" already exists")
    repository[factoryOption.$id]=factoryOption
}
export function RegisterComponentDirect(option:ComponentMvvmFactoryOption){
    if(repository[option.$id]!=null)
        throw new Error("component " + option.$id + " has already exist")
    repository[option.$id]=option
}

export function InitComponent(name: string, namespace: string): IComponentMvvm {
    name = name.toLowerCase()
    namespace = namespace.toLowerCase()
    let factory = repository[Id(namespace,name)]
    if (factory && !factory.$preProcess){
        preProcess(factory)
        factory.$preProcess=true
    }
    if(factory){
        return factory.$constructor
    }else{
        throw new Error("component "+Id(namespace,name)+" not exists")
    }
    
}
export function GetDomTree(name: string, namespace: string){
    name = name.toLowerCase()
    namespace = namespace.toLowerCase()
    let factory = repository[Id(namespace,name)]
    if(factory==null)
        return null
    return factory.$domtree
}
export function IsComponentRegistered(name: string, namespace: string) {
    name = name.toLowerCase()
    namespace = namespace.toLowerCase()
    if (repository[Id(namespace,name)])
        return true
    else
        return false
}
function preProcess(option: ComponentMvvmFactoryOption) {
    //模版
    if (option.$origin.templateUrl != null) {
        option.$origin.template = HttpGet(option.$origin.templateUrl)
        if (option.$origin.template == null) {
            LogError("path " + option.$origin.templateUrl + " not found")
            return
        }
    }

    

    let res=Parse(option.$origin.template);
    if(res.length>1)
        throw new Error(option.$origin.namespace+":"+option.$origin.name+" template should have only one root")
    if(res.length==1)
        option.$domtree = res[0];
    else{
        throw new Error("template should not be empty")
    }
    //样式
    if (option.$origin.styleUrl != null) {
        option.$origin.style = HttpGet(option.$origin.styleUrl)
    }
    if (option.$origin.style != null) {
        // let css = option.style.replace(/(?!\s)([^\{\}]+?)(?=\s*\{[^\{\}]*\})/g, function (str) {
        //     return str + "[" + option.$id + "]"
        // })
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = option.$origin.style;
        document.getElementsByTagName('head')[0].appendChild(style);
    }
}
