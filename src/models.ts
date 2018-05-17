import { VDom } from './vdom/vdom';

export interface ComponentOption{
    $name?:string,
    template?:string,
    templateUrl?:string,
    data?:Object,
    methods?:{[name:string]:Function},
    props?:Prop[],
    events?:string[],
    style?:string,
    styleUrl?:string,
    $namespace?:string,
    $id?:string,
    $domtree?:VDom,
    computed?:{[name:string]:()=>any}
}

export interface Prop{
    name:string
    required:boolean
    type?:"array"|"object"|"number"|"string"|"boolean"
}
export interface OnDataChange {
    (newvalue:any,oldvalue:any):void
}
/**for语句 */
export class ForExp{
    constructor(public itemExp:string,public arrayExp:string){}
}

/**返回值 */
export interface RetureValue{
    exp:string,
    data:any
}
export interface DirectiveOption{
    $name:string
    $namespace:string
    data?:Object
    methods?:{[name:string]:Function}
    props?:Prop[]
    events?:string[]
}

