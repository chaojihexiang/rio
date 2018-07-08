(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Rio"] = factory();
	else
		root["Rio"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/const.ts":
/*!**********************!*\
  !*** ./src/const.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.DIR_MODEL = "model";
exports.DIR_EVENT_CLICK = "click";
exports.PRE = "r-";
/**花括号数据绑定表达式 */
exports.REG_SINGLE = /^\{\{([^\{\}]*)\}\}$/;
exports.REG_MULTI = /\{\{(.*?)\}\}/;
/**事件监听响应函数 */
exports.REG_EVENT = /^(\w+)\((.*)\)$/;
/**字符串 */
exports.REG_STR = /^(['"])(.*?)\1$/;
exports.REG_MID_STR = /(['"])(.*?)\1/;
/**输入属性 */
exports.REG_IN = /^\[(\w+)\]$/;
/**输出事件 */
exports.REG_OUT = /^\((\w+)\)$/;
/**正常属性 */
exports.REG_ATTR = /^[A-z_]\w*$/;
/**测试输出项 */
exports.REG_TEST_OUTPUT = /^((click))$/;
var VNodeStatus;
(function (VNodeStatus) {
    /**依然处于vnode树中 */
    VNodeStatus[VNodeStatus["ACTIVE"] = 0] = "ACTIVE";
    /**不在vnode树中但是有可能重新加回来 */
    VNodeStatus[VNodeStatus["INACTIVE"] = 1] = "INACTIVE";
    /**抛弃 */
    VNodeStatus[VNodeStatus["DEPRECATED"] = 2] = "DEPRECATED";
})(VNodeStatus = exports.VNodeStatus || (exports.VNodeStatus = {}));
var DomType;
(function (DomType) {
    /*没有变化的*/
    DomType[DomType["CONSTANT"] = 0] = "CONSTANT";
    /**新增的 */
    DomType[DomType["NEW"] = 1] = "NEW";
    /**删除的 */
    DomType[DomType["DELETE"] = 2] = "DELETE";
})(DomType = exports.DomType || (exports.DomType = {}));


/***/ }),

/***/ "./src/decorator/app.ts":
/*!******************************!*\
  !*** ./src/decorator/app.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var app_manager_1 = __webpack_require__(/*! ../manager/app-manager */ "./src/manager/app-manager.ts");
var vdom_1 = __webpack_require__(/*! ../vdom/vdom */ "./src/vdom/vdom.ts");
var property_1 = __webpack_require__(/*! ./property */ "./src/decorator/property.ts");
function App(option) {
    checkAppOption(option);
    var res = property_1.FetchProperty();
    return function (target) {
        var constructor = /** @class */ (function (_super) {
            __extends($AppMvvm, _super);
            function $AppMvvm() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.$InitFuncs = res.initFuncs;
                _this.$DestroyFuncs = res.destroyFuncs;
                return _this;
            }
            $AppMvvm.prototype.$initialize = function () {
                var _this = this;
                _super.prototype.$initialize.call(this);
                this.$InitFuncs.forEach(function (init) {
                    _this[init].call(_this);
                });
            };
            $AppMvvm.prototype.$OnDestroy = function () {
                var _this = this;
                _super.prototype.$OnDestroy.call(this);
                this.$DestroyFuncs.forEach(function (destroy) {
                    _this[destroy].call(_this);
                });
            };
            $AppMvvm.prototype.$InitTreeroot = function () {
                var dom = document.querySelector(option.el);
                if (dom == null) {
                    throw new Error("no specified element " + option.el);
                }
                var vdom = vdom_1.TraverseDom(dom);
                var vnode = vdom_1.NewVNode(vdom, this, null);
                return vnode;
            };
            $AppMvvm.prototype.$InitNamespace = function () {
                return option.namespace;
            };
            $AppMvvm.prototype.$InitDataItems = function () {
                var _this = this;
                var datas = [];
                res.datas.forEach(function (item) {
                    datas.push({ name: item, value: _this[item] });
                });
                return datas;
            };
            $AppMvvm.prototype.$InitComputeItems = function () {
                return res.computes;
            };
            $AppMvvm.prototype.$InitEl = function () {
                return option.el;
            };
            return $AppMvvm;
        }(target));
        app_manager_1.RegisterApp(constructor);
    };
}
exports.App = App;
function checkAppOption(option) {
    option.namespace = option.namespace ? option.namespace : "default";
}


/***/ }),

/***/ "./src/decorator/component.ts":
/*!************************************!*\
  !*** ./src/decorator/component.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var components_manager_1 = __webpack_require__(/*! ../manager/components-manager */ "./src/manager/components-manager.ts");
var property_1 = __webpack_require__(/*! ./property */ "./src/decorator/property.ts");
var vdom_1 = __webpack_require__(/*! ../vdom/vdom */ "./src/vdom/vdom.ts");
function Component(option) {
    checkComponentOption(option);
    var res = property_1.FetchProperty();
    return function (target) {
        var constructor = /** @class */ (function (_super) {
            __extends($ComponentMvvm, _super);
            function $ComponentMvvm() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.$InitFuncs = res.initFuncs;
                _this.$DestroyFuncs = res.destroyFuncs;
                return _this;
            }
            $ComponentMvvm.prototype.$initialize = function () {
                var _this = this;
                _super.prototype.$initialize.call(this);
                this.$InitFuncs.forEach(function (init) {
                    _this[init].call(_this);
                });
            };
            $ComponentMvvm.prototype.$OnDestroy = function () {
                var _this = this;
                _super.prototype.$OnDestroy.call(this);
                this.$DestroyFuncs.forEach(function (destroy) {
                    _this[destroy].call(_this);
                });
            };
            $ComponentMvvm.prototype.$InitTreeroot = function () {
                var domtree = components_manager_1.GetDomTree(this.$InitName(), this.$InitNamespace());
                if (domtree == null) {
                    throw new Error("not found template or templateUrl for component " + this.$InitName() + " in " + this.$InitNamespace());
                }
                var vnode = vdom_1.NewVNode(domtree, this, null);
                return vnode;
            };
            $ComponentMvvm.prototype.$InitNamespace = function () {
                return option.namespace;
            };
            $ComponentMvvm.prototype.$InitDataItems = function () {
                var _this = this;
                var datas = [];
                res.datas.forEach(function (item) {
                    datas.push({ name: item, value: _this[item] });
                });
                return datas;
            };
            $ComponentMvvm.prototype.$InitComputeItems = function () {
                return res.computes;
            };
            $ComponentMvvm.prototype.$InitName = function () {
                return option.name;
            };
            $ComponentMvvm.prototype.$InitIns = function () {
                return res.props;
            };
            $ComponentMvvm.prototype.$InitOuts = function () {
                return option.events;
            };
            return $ComponentMvvm;
        }(target));
        components_manager_1.RegisterComponent(option.name, option.namespace, constructor, option);
    };
}
exports.Component = Component;
function checkComponentOption(option) {
    option.namespace = option.namespace ? option.namespace : "default";
    option.events = option.events ? option.events : [];
}


/***/ }),

/***/ "./src/decorator/directive.ts":
/*!************************************!*\
  !*** ./src/decorator/directive.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var property_1 = __webpack_require__(/*! ./property */ "./src/decorator/property.ts");
var directive_manager_1 = __webpack_require__(/*! ../manager/directive-manager */ "./src/manager/directive-manager.ts");
function Directive(option) {
    checkDirectiveOption(option);
    var res = property_1.FetchProperty();
    return function (target) {
        var constructor = /** @class */ (function (_super) {
            __extends($DirectiveMvvm, _super);
            function $DirectiveMvvm(directive, vnode) {
                var _this = _super.call(this, directive, vnode) || this;
                _this.$Name = option.name;
                _this.$Namespace = option.namespace;
                _this.$Ins = res.props;
                _this.$Out = option.events;
                _this.$InitFuncs = res.initFuncs;
                _this.$DestroyFuncs = res.destroyFuncs;
                return _this;
            }
            return $DirectiveMvvm;
        }(target));
        directive_manager_1.RegisterDirective(option.name, option.namespace, constructor);
    };
}
exports.Directive = Directive;
function checkDirectiveOption(option) {
    option.events = option.events ? option.events : [];
    option.namespace = option.namespace ? option.namespace : "default";
}


/***/ }),

/***/ "./src/decorator/property.ts":
/*!***********************************!*\
  !*** ./src/decorator/property.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var datas = [];
var computes = [];
var props = [];
var initFuncs = [];
var destroyFuncs = [];
function Data(target, key) {
    datas.push(key);
}
exports.Data = Data;
function Computed(target, key, descriptor) {
    computes.push({ name: key, get: descriptor.get });
}
exports.Computed = Computed;
function Prop(name, required, type) {
    props.push({
        name: name,
        required: required,
        type: type
    });
    return function (target, key) { };
}
exports.Prop = Prop;
function OnInit(target, key, descriptor) {
    initFuncs.push(key);
}
exports.OnInit = OnInit;
function OnDestroy(target, key, descriptor) {
    destroyFuncs.push(key);
}
exports.OnDestroy = OnDestroy;
function FetchProperty() {
    var res = {
        computes: computes,
        props: props,
        initFuncs: initFuncs,
        destroyFuncs: destroyFuncs,
        datas: datas
    };
    computes = [];
    props = [];
    initFuncs = [];
    destroyFuncs = [];
    datas = [];
    return res;
}
exports.FetchProperty = FetchProperty;


/***/ }),

/***/ "./src/directive/class.ts":
/*!********************************!*\
  !*** ./src/directive/class.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(/*! ../util */ "./src/util.ts");
function Classes(exp, vnode, isconst) {
    if (isconst) {
        var hacked = "var a=" + exp + ";a";
        var classes_1;
        try {
            classes_1 = eval(hacked);
        }
        catch (error) {
            util_1.LogError("json format error:" + exp);
            return;
        }
        var _loop_1 = function (key) {
            var istrue = vnode.mvvm.$GetExpOrFunValue(key);
            if (istrue) {
                vnode.DomSet[0].dom.classList.add(classes_1[key]);
            }
            vnode.mvvm.$CreateWatcher(vnode, key, function (newvalue) {
                if (newvalue) {
                    vnode.DomSet[0].dom.classList.add(classes_1[key]);
                }
                else {
                    vnode.DomSet[0].dom.classList.remove(classes_1[key]);
                }
            });
        };
        for (var key in classes_1) {
            _loop_1(key);
        }
    }
}
exports.Classes = Classes;


/***/ }),

/***/ "./src/directive/href.ts":
/*!*******************************!*\
  !*** ./src/directive/href.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ../const */ "./src/const.ts");
var util_1 = __webpack_require__(/*! ../util */ "./src/util.ts");
function Href(exp, vnode, isconst) {
    var href = "";
    if (vnode.DomSet[0].dom.nodeName.toLowerCase() == "a") {
        if (isconst) {
            var streval = util_1.StrToEvalstr(exp);
            if (streval.isconst) {
                href = streval.exp;
                vnode.DomSet[0].dom.setAttribute(const_1.PRE + "href", streval.exp);
            }
            else {
                var newvalue = vnode.mvvm.$GetExpOrFunValue(streval.exp);
                href = newvalue;
                vnode.DomSet[0].dom.setAttribute(const_1.PRE + "href", newvalue);
                vnode.mvvm.$CreateWatcher(vnode, streval.exp, function (newvalue) {
                    href = newvalue;
                    vnode.DomSet[0].dom.setAttribute(const_1.PRE + "href", newvalue);
                });
            }
        }
        else {
            var newvalue = vnode.mvvm.$GetExpOrFunValue(exp);
            href = newvalue;
            vnode.mvvm.$CreateWatcher(vnode, exp, function (newvalue) {
                href = newvalue;
                vnode.DomSet[0].dom.setAttribute(const_1.PRE + "href", newvalue);
            });
        }
    }
    vnode.DomSet[0].dom.addEventListener("click", function () {
        vnode.NavigateTo(href);
    });
}
exports.Href = Href;


/***/ }),

/***/ "./src/directive/html.ts":
/*!*******************************!*\
  !*** ./src/directive/html.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(/*! ../util */ "./src/util.ts");
function Html(exp, vnode, noBracket) {
    if (noBracket) {
        var strEval = util_1.StrToEvalstr(exp);
        if (strEval.isconst)
            vnode.DomSet[0].dom.innerHTML = strEval.exp;
        else {
            var newvalue = vnode.mvvm.$GetExpOrFunValue(strEval.exp);
            vnode.DomSet[0].dom.innerHTML = newvalue;
            vnode.mvvm.$CreateWatcher(vnode, strEval.exp, function (newvalue) {
                vnode.DomSet[0].dom.innerHTML = newvalue;
            });
        }
    }
    else {
        var newvalue = vnode.mvvm.$GetExpOrFunValue(exp);
        vnode.DomSet[0].dom.innerHTML = newvalue;
        vnode.mvvm.$CreateWatcher(vnode, exp, function (newvalue) {
            vnode.DomSet[0].dom.innerHTML = newvalue;
        });
    }
}
exports.Html = Html;


/***/ }),

/***/ "./src/directive/inner-dir.ts":
/*!************************************!*\
  !*** ./src/directive/inner-dir.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var href_1 = __webpack_require__(/*! ./href */ "./src/directive/href.ts");
var const_1 = __webpack_require__(/*! ../const */ "./src/const.ts");
var model_1 = __webpack_require__(/*! ./model */ "./src/directive/model.ts");
var onclick_1 = __webpack_require__(/*! ./onclick */ "./src/directive/onclick.ts");
var html_1 = __webpack_require__(/*! ./html */ "./src/directive/html.ts");
var style_1 = __webpack_require__(/*! ./style */ "./src/directive/style.ts");
var class_1 = __webpack_require__(/*! ./class */ "./src/directive/class.ts");
var innerDirs = {};
function RegisterInnerDir(name, comiple) {
    if (innerDirs[name] != null)
        throw new Error("inner directive " + name + " already exists");
    innerDirs[name] = comiple;
}
function GetInnerDir(name) {
    return innerDirs[name];
}
exports.GetInnerDir = GetInnerDir;
RegisterInnerDir(const_1.PRE + "href", href_1.Href);
RegisterInnerDir(const_1.PRE + "model", model_1.DirModel);
RegisterInnerDir(const_1.PRE + "click", onclick_1.OnClick);
RegisterInnerDir(const_1.PRE + "html", html_1.Html);
RegisterInnerDir(const_1.PRE + "class", class_1.Classes);
RegisterInnerDir(const_1.PRE + "style", style_1.Style);


/***/ }),

/***/ "./src/directive/model.ts":
/*!********************************!*\
  !*** ./src/directive/model.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function DirModel(exp, vnode, isconst) {
    var inputtype = vnode.Vdom.GetAttr("type");
    var input = vnode.Vdom.NodeName.toLowerCase();
    var newvalue = vnode.mvvm.$GetExpOrFunValue(exp);
    setValue(vnode, newvalue);
    if (input == "input" && inputtype == "checkbox") {
        vnode.mvvm.$CreateWatcher(vnode, exp, function (newvalue) {
            setValue(vnode, newvalue);
        }, true);
    }
    else {
        vnode.mvvm.$CreateWatcher(vnode, exp, function (newvalue) {
            setValue(vnode, newvalue);
        });
    }
    vnode.DomSet[0].dom.addEventListener("input", function (event) {
        //select控件
        if (vnode.GetNodeName() == "select") {
            vnode.mvvm.$SetValue(exp, event.target.value);
            return;
        }
        //text radio checkbox控件
        var inputType = vnode.DomSet[0].dom.getAttribute("type");
        if (inputType == null || inputType == "")
            inputType = "text";
        switch (inputType) {
            case "text":
            case "radio":
                vnode.mvvm.$SetValue(exp, event.target.value);
                break;
            case "checkbox":
                var cur = vnode.mvvm.$GetExpOrFunValue(exp);
                if (toString.call(cur) == "[object Array]") {
                    var oldarray = cur;
                    var index = oldarray.indexOf(event.target.value);
                    if (index == -1) {
                        oldarray.push(event.target.value);
                    }
                    else {
                        oldarray.splice(index, 1);
                    }
                }
                break;
        }
    });
}
exports.DirModel = DirModel;
function setValue(vnode, newvalue) {
    var dom = vnode.DomSet[0].dom;
    //select控件
    if (vnode.GetNodeName() == "select") {
        dom.value = newvalue;
        return;
    }
    //text radio checkbox控件
    var inputType = dom.getAttribute("type");
    if (inputType == null || inputType == "")
        inputType = "text";
    switch (inputType) {
        case "text":
            dom.value = newvalue;
            break;
        case "radio":
            if (dom.value == newvalue) {
                dom.checked = true;
            }
            else
                dom.checked = false;
            break;
        case "checkbox":
            if (toString.call(newvalue) == "[object Array]") {
                if (newvalue.indexOf(dom.value) == -1) {
                    dom.checked = false;
                }
                else
                    dom.checked = true;
            }
            break;
    }
}


/***/ }),

/***/ "./src/directive/onclick.ts":
/*!**********************************!*\
  !*** ./src/directive/onclick.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ../const */ "./src/const.ts");
function OnClick(exp, vnode, isconst) {
    if (const_1.REG_EVENT.test(exp)) {
        var methodStr_1 = RegExp.$1;
        var paramsStr = RegExp.$2;
        if (paramsStr.length > 0) {
            var ps_1 = paramsStr.split(",");
            vnode.DomSet[0].dom.addEventListener("click", function () {
                var params = [];
                ps_1.forEach(function (p) {
                    if (!const_1.REG_STR.test(p)) {
                        if (p === "true") {
                            params.push(true);
                            return;
                        }
                        if (p === "false") {
                            params.push(false);
                        }
                        var n = new Number(p).valueOf();
                        if (!isNaN(n)) {
                            params.push(n.valueOf());
                        }
                        else {
                            //肯定是本地变量
                            params.push(vnode.mvvm.$GetExpOrFunValue(p));
                        }
                    }
                    else {
                        params.push(RegExp.$2);
                    }
                });
                (_a = vnode.mvvm).$RevokeMethod.apply(_a, [methodStr_1].concat(params));
                var _a;
            });
        }
        else {
            vnode.DomSet[0].dom.addEventListener("click", function () {
                vnode.mvvm.$RevokeMethod(methodStr_1);
            });
        }
    }
}
exports.OnClick = OnClick;


/***/ }),

/***/ "./src/directive/style.ts":
/*!********************************!*\
  !*** ./src/directive/style.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(/*! ../util */ "./src/util.ts");
function Style(exp, vnode, isconst) {
    if (isconst) {
        var hacked = "var a=" + exp + ";a";
        var styleexp = void 0;
        try {
            styleexp = eval(hacked);
        }
        catch (error) {
            util_1.LogError("json format error:" + exp);
            return;
        }
        var _loop_1 = function (key) {
            var istrue = vnode.mvvm.$GetExpOrFunValue(key);
            var styles = styleexp[key];
            if (istrue) {
                for (var stylename in styles) {
                    vnode.DomSet[0].dom.style[stylename] = styles[stylename];
                }
            }
            vnode.mvvm.$CreateWatcher(vnode, key, function (newvalue) {
                if (newvalue) {
                    for (var stylename in styles) {
                        vnode.DomSet[0].dom.style[stylename] = styles[stylename];
                    }
                }
                else {
                    for (var stylename in styles) {
                        vnode.DomSet[0].dom.style[stylename] = "";
                    }
                }
            });
        };
        for (var key in styleexp) {
            _loop_1(key);
        }
    }
}
exports.Style = Style;


/***/ }),

/***/ "./src/eval.js":
/*!*********************!*\
  !*** ./src/eval.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

var EvalExp=function(context,exp,attachObj){
    var res;
    var newcontext=context
    if(attachObj!=null){
        newcontext=Object.assign(context,$attachObj)
    }
    try {
        with(newcontext){
            res=eval(exp)
        }
        return res
    } catch (error) {
        console.error("eval "+exp+" failed")
        console.error(error)
    }
    return "" 
}

exports.EvalExp=EvalExp


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var start_1 = __webpack_require__(/*! ./manager/start */ "./src/manager/start.ts");
var component_1 = __webpack_require__(/*! ./decorator/component */ "./src/decorator/component.ts");
exports.Component = component_1.Component;
var app_1 = __webpack_require__(/*! ./decorator/app */ "./src/decorator/app.ts");
exports.App = app_1.App;
var property_1 = __webpack_require__(/*! ./decorator/property */ "./src/decorator/property.ts");
exports.Data = property_1.Data;
exports.Computed = property_1.Computed;
exports.Prop = property_1.Prop;
exports.OnInit = property_1.OnInit;
exports.OnDestroy = property_1.OnDestroy;
var directive_1 = __webpack_require__(/*! ./decorator/directive */ "./src/decorator/directive.ts");
exports.Directive = directive_1.Directive;
var component_mvvm_1 = __webpack_require__(/*! ./mvvm/component-mvvm */ "./src/mvvm/component-mvvm.ts");
exports.ComponentMvvm = component_mvvm_1.ComponentMvvm;
var app_mvvm_1 = __webpack_require__(/*! ./mvvm/app-mvvm */ "./src/mvvm/app-mvvm.ts");
exports.AppMvvm = app_mvvm_1.AppMvvm;
var directive_mvvm_1 = __webpack_require__(/*! ./mvvm/directive-mvvm */ "./src/mvvm/directive-mvvm.ts");
exports.DirectiveMVVM = directive_mvvm_1.DirectiveMVVM;
var router_manager_1 = __webpack_require__(/*! ./router/router-manager */ "./src/router/router-manager.ts");
exports.RegisterRouter = router_manager_1.RegisterRouter;
document.addEventListener("DOMContentLoaded", function () {
    start_1.Start();
});


/***/ }),

/***/ "./src/manager/app-manager.ts":
/*!************************************!*\
  !*** ./src/manager/app-manager.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var apps = [];
function RegisterApp(app) {
    apps.push(app);
}
exports.RegisterApp = RegisterApp;
function GetApp() {
    return apps;
}
exports.GetApp = GetApp;


/***/ }),

/***/ "./src/manager/components-manager.ts":
/*!*******************************************!*\
  !*** ./src/manager/components-manager.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(/*! ../util */ "./src/util.ts");
var vdom_1 = __webpack_require__(/*! ../vdom/vdom */ "./src/vdom/vdom.ts");
var repository = {};
function Id(namespace, name) {
    return namespace + "::" + name;
}
exports.Id = Id;
function RegisterComponent(name, namespace, constructor, option) {
    var factoryOption = {
        $constructor: constructor,
        $id: Id(namespace, name),
        $preProcess: false,
        $domtree: null,
        $origin: option
    };
    if (repository[factoryOption.$id] != null)
        throw new Error("component " + factoryOption.$id + " already exists");
    repository[factoryOption.$id] = factoryOption;
}
exports.RegisterComponent = RegisterComponent;
function RegisterComponentDirect(option) {
    if (repository[option.$id] != null)
        throw new Error("component " + option.$id + " has already exist");
    repository[option.$id] = option;
}
exports.RegisterComponentDirect = RegisterComponentDirect;
function InitComponent(name, namespace) {
    name = name.toLowerCase();
    namespace = namespace.toLowerCase();
    var factory = repository[Id(namespace, name)];
    if (factory && !factory.$preProcess) {
        preProcess(factory);
        factory.$preProcess = true;
    }
    if (factory) {
        return factory.$constructor;
    }
    else {
        throw new Error("component " + Id(namespace, name) + " not exists");
    }
}
exports.InitComponent = InitComponent;
function GetDomTree(name, namespace) {
    name = name.toLowerCase();
    namespace = namespace.toLowerCase();
    var factory = repository[Id(namespace, name)];
    if (factory == null)
        return null;
    return factory.$domtree;
}
exports.GetDomTree = GetDomTree;
function IsComponentRegistered(name, namespace) {
    name = name.toLowerCase();
    namespace = namespace.toLowerCase();
    if (repository[Id(namespace, name)])
        return true;
    else
        return false;
}
exports.IsComponentRegistered = IsComponentRegistered;
function preProcess(option) {
    //模版
    if (option.$origin.templateUrl != null) {
        option.$origin.template = util_1.HttpGet(option.$origin.templateUrl);
        if (option.$origin.template == null) {
            util_1.LogError("path " + option.$origin.templateUrl + " not found");
            return;
        }
    }
    var res = (new DOMParser()).parseFromString(option.$origin.template, "text/html").body;
    if (res.children.length > 1)
        throw new Error(option.$origin.name + "::" + option.$origin.namespace + " template should have only one root");
    if (res.children.length == 1)
        option.$domtree = vdom_1.TraverseDom(res.children[0]);
    else {
        if (res.childNodes.length == 1)
            option.$domtree = vdom_1.TraverseDom(res.childNodes[0]);
        else
            throw new Error("template should not be empty");
    }
    //样式
    if (option.$origin.styleUrl != null) {
        option.$origin.style = util_1.HttpGet(option.$origin.styleUrl);
    }
    if (option.$origin.style != null) {
        // let css = option.style.replace(/(?!\s)([^\{\}]+?)(?=\s*\{[^\{\}]*\})/g, function (str) {
        //     return str + "[" + option.$id + "]"
        // })
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = option.$origin.style;
        document.getElementsByTagName('head')[0].appendChild(style);
        addAttr(option.$domtree, option.$id);
    }
}
function addAttr(dom, attr) {
    dom.AddAttr(attr);
    if (dom.NodeType == 1) {
        dom.Children.forEach(function (child) {
            addAttr(child, attr);
        });
    }
}


/***/ }),

/***/ "./src/manager/directive-manager.ts":
/*!******************************************!*\
  !*** ./src/manager/directive-manager.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var components_manager_1 = __webpack_require__(/*! ./components-manager */ "./src/manager/components-manager.ts");
var repository = {};
function RegisterDirective(name, namespace, constructor) {
    if (repository[components_manager_1.Id(namespace, name)] != null)
        throw new Error("directive " + components_manager_1.Id(namespace, name) + " already exists");
    repository[components_manager_1.Id(namespace, name)] = constructor;
}
exports.RegisterDirective = RegisterDirective;
function GetDirectiveCon(name, namespace) {
    name = name.toLowerCase();
    namespace = namespace.toLowerCase();
    var constructor = repository[components_manager_1.Id(namespace, name)];
    return constructor;
}
exports.GetDirectiveCon = GetDirectiveCon;
function IsDirectiveRegistered(name, namespace) {
    name = name.toLowerCase();
    namespace = namespace.toLowerCase();
    if (repository[components_manager_1.Id(namespace, name)] != null)
        return true;
    else
        return false;
}
exports.IsDirectiveRegistered = IsDirectiveRegistered;


/***/ }),

/***/ "./src/manager/start.ts":
/*!******************************!*\
  !*** ./src/manager/start.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var app_manager_1 = __webpack_require__(/*! ./app-manager */ "./src/manager/app-manager.ts");
var apps = [];
function Start() {
    var appscons = app_manager_1.GetApp();
    appscons.forEach(function (App) {
        var mvvm = new App();
        mvvm.$initialize();
        mvvm.$AttachChildren();
        mvvm.$SetRoot(true);
        apps.push(mvvm);
        var content = mvvm.$Render();
        var target = document.querySelector(mvvm.$InitEl());
        target.parentElement.replaceChild(content.dom, target);
    });
}
exports.Start = Start;
function RefreshApp() {
    apps.forEach(function (app) { return app.$Refresh(); });
}
exports.RefreshApp = RefreshApp;


/***/ }),

/***/ "./src/models.ts":
/*!***********************!*\
  !*** ./src/models.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**for语句 */
var ForExp = /** @class */ (function () {
    function ForExp(itemExp, arrayExp) {
        this.itemExp = itemExp;
        this.arrayExp = arrayExp;
    }
    return ForExp;
}());
exports.ForExp = ForExp;


/***/ }),

/***/ "./src/mvvm/app-mvvm.ts":
/*!******************************!*\
  !*** ./src/mvvm/app-mvvm.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var router_manager_1 = __webpack_require__(/*! ../router/router-manager */ "./src/router/router-manager.ts");
var mvvm_1 = __webpack_require__(/*! ./mvvm */ "./src/mvvm/mvvm.ts");
var AppMvvm = /** @class */ (function (_super) {
    __extends(AppMvvm, _super);
    function AppMvvm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.$el = "";
        return _this;
    }
    AppMvvm.prototype.$NavigateTo = function (url) {
        window.history.replaceState(null, null, url);
        router_manager_1.NotifyUrlChange();
    };
    AppMvvm.prototype.$Render = function () {
        var doms = this.$treeRoot.Render();
        return doms[0];
    };
    AppMvvm.prototype.$InitNamespace = function () {
        throw new Error("Method not implemented.");
    };
    AppMvvm.prototype.$InitDataItems = function () {
        throw new Error("Method not implemented.");
    };
    AppMvvm.prototype.$InitComputeItems = function () {
        throw new Error("Method not implemented.");
    };
    AppMvvm.prototype.$InitTreeroot = function () {
        throw new Error("Method not implemented.");
    };
    AppMvvm.prototype.$InitEl = function () {
        throw new Error("Method not implemented.");
    };
    return AppMvvm;
}(mvvm_1.Mvvm));
exports.AppMvvm = AppMvvm;


/***/ }),

/***/ "./src/mvvm/component-mvvm.ts":
/*!************************************!*\
  !*** ./src/mvvm/component-mvvm.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(/*! ../util */ "./src/util.ts");
var mvvm_1 = __webpack_require__(/*! ./mvvm */ "./src/mvvm/mvvm.ts");
var ComponentMvvm = /** @class */ (function (_super) {
    __extends(ComponentMvvm, _super);
    function ComponentMvvm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.$name = "";
        _this.$ins = [];
        _this.$outs = [];
        return _this;
    }
    ComponentMvvm.prototype.$initialize = function () {
        var _this = this;
        _super.prototype.$initialize.call(this);
        this.$ins = this.$InitIns();
        this.$outs = this.$InitOuts();
        this.$name = this.$InitName();
        this.$ins.forEach(function (prop) {
            var inName = _this.$fenceNode.GetIn(prop.name);
            if (inName == null && prop.required) {
                throw new Error("component \'" + _this.$name + "\' need prop \'" + prop.name);
            }
            if (inName != null) {
                if (inName.const) {
                    _this[prop.name] = inName.value;
                }
                else {
                    Object.defineProperty(_this, prop.name, {
                        get: function () {
                            var newvalue = _this.$fenceNode.mvvm.$GetExpOrFunValue(inName.value);
                            _this.$checkProp(prop, newvalue);
                            return newvalue;
                        }
                    });
                }
            }
        });
    };
    ComponentMvvm.prototype.$checkProp = function (prop, value) {
        var error = function (name, prop, type) {
            throw new Error("component \'" + name + "\' prop \'" + prop + "\' not receive " + type);
        };
        if (prop.type == "array" && toString.call(value) != "[object Array]") {
            error(this.$name, prop.name, prop.type);
        }
        if (prop.type == "object" && toString.call(value) != "[object Object]") {
            error(this.$name, prop.name, prop.type);
        }
        if (prop.type == "number" && toString.call(value) != "[object Number]") {
            error(this.$name, prop.name, prop.type);
        }
        if (prop.type == "boolean" && toString.call(value) != "[object Boolean]") {
            error(this.$name, prop.name, prop.type);
        }
        if (prop.type == "string" && toString.call(value) != "[object String]") {
            error(this.$name, prop.name, prop.type);
        }
    };
    ComponentMvvm.prototype.$Render = function () {
        var doms = this.$treeRoot.Render();
        return doms[0];
    };
    ComponentMvvm.prototype.$Update = function () {
        this.$treeRoot.Update();
    };
    ComponentMvvm.prototype.$SetStatus = function (status) {
        this.$treeRoot.SetStatus(status);
    };
    ComponentMvvm.prototype.$Emit = function (event) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        if (this.$fenceNode != null && this.$fenceNode.mvvm != null) {
            var e = this.$outs.find(function (out) {
                return out.name == event;
            });
            if (e == null) {
                throw new Error("no specified event " + event + " at component " + this.$namespace + "::" + this.$name);
            }
            if (data.length != e.paramsType.length) {
                throw new Error("no specified params " + event + " at component " + this.$namespace + "::" + this.$name);
            }
            for (var i = 0; i < e.paramsType.length; i++) {
                if (util_1.TypeOf(data[i]) != e.paramsType[i]) {
                    throw new Error("params expected " + e.paramsType[i] + ",but received " + toString.call(data[i]) + " at component " + this.$namespace + "::" + this.$name);
                }
            }
            var method = this.$fenceNode.GetOut(event);
            (_a = this.$fenceNode.mvvm).$RevokeMethod.apply(_a, [method].concat(data));
        }
        var _a;
    };
    ;
    ComponentMvvm.prototype.$OnRouterChange = function () {
        this.$treeRoot.OnRouterChange();
    };
    ComponentMvvm.prototype.$GetFenceNode = function () {
        return this.$fenceNode;
    };
    ComponentMvvm.prototype.$SetFenceNode = function (node) {
        this.$fenceNode = node;
    };
    ComponentMvvm.prototype.$InitNamespace = function () {
        throw new Error("Method not implemented.");
    };
    ComponentMvvm.prototype.$InitDataItems = function () {
        throw new Error("Method not implemented.");
    };
    ComponentMvvm.prototype.$InitComputeItems = function () {
        throw new Error("Method not implemented.");
    };
    ComponentMvvm.prototype.$InitName = function () {
        throw new Error("Method not implemented.");
    };
    ComponentMvvm.prototype.$InitIns = function () {
        throw new Error("Method not implemented.");
    };
    ComponentMvvm.prototype.$InitOuts = function () {
        throw new Error("Method not implemented.");
    };
    ComponentMvvm.prototype.$InitTreeroot = function () {
        throw new Error("Method not implemented.");
    };
    ComponentMvvm.prototype.$GetIns = function () {
        return this.$ins;
    };
    return ComponentMvvm;
}(mvvm_1.Mvvm));
exports.ComponentMvvm = ComponentMvvm;


/***/ }),

/***/ "./src/mvvm/directive-mvvm.ts":
/*!************************************!*\
  !*** ./src/mvvm/directive-mvvm.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var DirectiveMVVM = /** @class */ (function () {
    function DirectiveMVVM($directive, $vnode) {
        this.$directive = $directive;
        this.$vnode = $vnode;
        this.$Ins = [];
        this.$Outs = [];
        this.$InitFuncs = [];
        this.$DestroyFuncs = [];
    }
    DirectiveMVVM.prototype.$OnDestroy = function () {
        var _this = this;
        this.$DestroyFuncs.forEach(function (destroy) {
            _this[destroy].call(_this);
        });
    };
    DirectiveMVVM.prototype.$Render = function () {
        var _this = this;
        this.$element = this.$vnode.DomSet[0].dom;
        this.$InitFuncs.forEach(function (init) {
            _this[init].call(_this);
        });
        this.$Ins.forEach(function (prop) {
            var inName = _this.$directive.GetIn(prop.name);
            if (inName == null && prop.required) {
                throw new Error("component \'" + _this.$Name + "\' need prop \'" + prop.name);
            }
            if (inName != null) {
                if (inName.const) {
                    _this[prop.name] = inName.value;
                }
                else {
                    var newvalue = _this.$vnode.mvvm.$GetExpOrFunValue(inName.value);
                    _this.$checkProp(prop, newvalue);
                    _this[prop.name] = newvalue;
                    _this.$vnode.mvvm.$CreateWatcher(_this.$vnode, inName.value, function (newvalue, oldvalue) {
                        _this.$checkProp(prop, newvalue);
                        _this[prop.name] = newvalue;
                    });
                }
            }
        });
    };
    DirectiveMVVM.prototype.$checkProp = function (prop, value) {
        var error = function (name, prop, type) {
            throw new Error("component \'" + name + "\' prop \'" + prop + "\' not receive " + type);
        };
        if (prop.type == "array" && toString.call(value) != "[object Array]") {
            error(this.$Name, prop.name, prop.type);
        }
        if (prop.type == "object" && toString.call(value) != "[object Object]") {
            error(this.$Name, prop.name, prop.type);
        }
        if (prop.type == "number" && toString.call(value) != "[object Number]") {
            error(this.$Name, prop.name, prop.type);
        }
        if (prop.type == "boolean" && toString.call(value) != "[object Boolean]") {
            error(this.$Name, prop.name, prop.type);
        }
        if (prop.type == "string" && toString.call(value) != "[object String]") {
            error(this.$Name, prop.name, prop.type);
        }
    };
    return DirectiveMVVM;
}());
exports.DirectiveMVVM = DirectiveMVVM;


/***/ }),

/***/ "./src/mvvm/mvvm.ts":
/*!**************************!*\
  !*** ./src/mvvm/mvvm.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var router_state_1 = __webpack_require__(/*! ../router/router-state */ "./src/router/router-state.ts");
var observer_1 = __webpack_require__(/*! ../observer/observer */ "./src/observer/observer.ts");
var eval_1 = __webpack_require__(/*! ../eval */ "./src/eval.js");
var watcher_1 = __webpack_require__(/*! ../observer/watcher */ "./src/observer/watcher.ts");
var Mvvm = /** @class */ (function () {
    function Mvvm() {
        this.$data = {};
        this.$namespace = "default";
        this.$dataItems = [];
        this.$computeItems = [];
        this.$isroot = false;
    }
    Object.defineProperty(Mvvm.prototype, "$router", {
        get: function () {
            return {
                active: router_state_1.GetActiveRouter(),
                cur: null
            };
        },
        enumerable: true,
        configurable: true
    });
    Mvvm.prototype.$initialize = function () {
        var _this = this;
        this.$dataItems = this.$InitDataItems();
        this.$computeItems = this.$InitComputeItems();
        this.$treeRoot = this.$InitTreeroot();
        this.$namespace = this.$InitNamespace();
        this.$dataItems.forEach(function (item) {
            _this.$data[item.name] = item.value;
            Object.defineProperty(_this, item.name, {
                get: function () {
                    return _this.$data[item.name];
                },
                set: function (value) {
                    _this.$data[item.name] = value;
                }
            });
        });
        observer_1.ReactiveData(this.$data);
        this.$computeItems.forEach(function (item) {
            observer_1.ReactiveComputed(_this, _this.$treeRoot, item.name, item.get);
        });
    };
    Mvvm.prototype.$AttachChildren = function () {
        this.$treeRoot.AttachChildren();
    };
    Mvvm.prototype.$GetExpOrFunValue = function (expOrFunc) {
        var res;
        if (typeof expOrFunc == "string") {
            res = eval_1.EvalExp(this, expOrFunc);
        }
        if (typeof expOrFunc == "function") {
            res = expOrFunc.call(this);
        }
        return res;
    };
    Mvvm.prototype.$ExtendMvvm = function () { return this; };
    Mvvm.prototype.$SetValue = function (exp, value) {
        var keys = exp.split(".");
        var target = this.$data;
        var hasTraget = true;
        for (var i = 0; i < keys.length - 1; i++) {
            if (target != null)
                target = target[keys[i]];
            else {
                hasTraget = false;
                break;
            }
        }
        if (hasTraget && target != null)
            target[keys[keys.length - 1]] = value;
    };
    Mvvm.prototype.$CreateWatcher = function (vnode, exp, listener, watchingArrayItem) {
        new watcher_1.Watcher(this, vnode, exp, listener, watchingArrayItem);
    };
    Mvvm.prototype.$OnDestroy = function () {
        this.$treeRoot.OnRemoved();
    };
    Mvvm.prototype.$SetRoot = function (isroot) {
        this.$isroot = isroot;
    };
    Mvvm.prototype.$IsRoot = function () {
        return this.$isroot;
    };
    Mvvm.prototype.$GetDataItems = function () {
        return this.$dataItems;
    };
    Mvvm.prototype.$GetComputedItems = function () {
        return this.$computeItems;
    };
    Mvvm.prototype.$Refresh = function () {
        this.$treeRoot.Rerender();
    };
    Mvvm.prototype.$RevokeMethod = function (method) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (typeof this[method] == "function")
            this[method].apply(this, params);
        else
            throw new Error(method + " is not a function");
    };
    return Mvvm;
}());
exports.Mvvm = Mvvm;


/***/ }),

/***/ "./src/observer/msg-queue.ts":
/*!***********************************!*\
  !*** ./src/observer/msg-queue.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var start_1 = __webpack_require__(/*! ../manager/start */ "./src/manager/start.ts");
var queue = [];
var settimeout = false;
function AddWatcher(watcher) {
    if (queue.indexOf(watcher) == -1)
        queue.push(watcher);
    if (!settimeout) {
        settimeout = true;
        setTimeout(function () {
            RevokeWatcher();
            settimeout = false;
        }, 0);
    }
}
exports.AddWatcher = AddWatcher;
function RevokeWatcher() {
    var temp = [];
    queue.forEach(function (q) { return temp.push(q); });
    queue = [];
    temp.forEach(function (watcher) { return watcher.Update(); });
    if (queue.length > 0) {
        RevokeWatcher();
    }
    else {
        start_1.RefreshApp();
    }
}
exports.RevokeWatcher = RevokeWatcher;


/***/ }),

/***/ "./src/observer/observer.ts":
/*!**********************************!*\
  !*** ./src/observer/observer.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var watcher_1 = __webpack_require__(/*! ./watcher */ "./src/observer/watcher.ts");
var watcher_collect_1 = __webpack_require__(/*! ./watcher-collect */ "./src/observer/watcher-collect.ts");
var $target;
function SetTarget(target) {
    $target = target;
}
exports.SetTarget = SetTarget;
function CleanTarget() {
    $target = null;
}
exports.CleanTarget = CleanTarget;
function ReactiveData(data) {
    if (data != null && typeof data == "object") {
        Object.keys(data).forEach(function (key) {
            reactiveKey(data, key);
            ReactiveData(data[key]);
        });
    }
}
exports.ReactiveData = ReactiveData;
function reactiveKey(data, key) {
    var collecter = new watcher_collect_1.WatcherCollecter(key);
    var value = data[key];
    if (toString.call(value) == "[object Array]") {
        reactiveArray(value, collecter);
    }
    Object.defineProperty(data, key, {
        get: function () {
            if ($target != null) {
                collecter.AddTarget($target);
            }
            return value;
        },
        set: function (newval) {
            if (newval != value) {
                value = newval;
                if (toString.call(value) == "[object Array]") {
                    reactiveArray(value, collecter);
                }
                ReactiveData(newval);
                collecter.Notify();
            }
        },
        enumerable: true,
        configurable: true
    });
}
function reactiveArray(array, collecter) {
    if (array.push != Array.prototype.push)
        return;
    Object.defineProperty(array, "push", {
        enumerable: false,
        configurable: true,
        value: function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            var old = array.length;
            var res = (_a = Array.prototype.push).call.apply(_a, [array].concat(params));
            for (var i = old; i < res; i++) {
                reactiveKey(array, "" + i);
            }
            collecter.Notify();
            return res;
            var _a;
        }
    });
    Object.defineProperty(array, "pop", {
        enumerable: false,
        configurable: true,
        value: function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            var res = (_a = Array.prototype.pop).call.apply(_a, [array].concat(params));
            collecter.Notify();
            return res;
            var _a;
        }
    });
    Object.defineProperty(array, "splice", {
        enumerable: false,
        configurable: true,
        value: function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            var res = (_a = Array.prototype.splice).call.apply(_a, [array].concat(params));
            if (params.length > 2) {
                var newitems = params.slice(2);
                newitems.forEach(function (item) {
                    var index = array.indexOf(item);
                    reactiveKey(array, "" + index);
                });
            }
            collecter.Notify();
            return res;
            var _a;
        }
    });
    Object.defineProperty(array, "shift", {
        enumerable: false,
        configurable: true,
        value: function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            var res = (_a = Array.prototype.shift).call.apply(_a, [array].concat(params));
            collecter.Notify();
            return res;
            var _a;
        }
    });
}
function ReactiveComputed(mvvm, vnode, key, func) {
    var collecter = new watcher_collect_1.WatcherCollecter(key);
    var firstget = true;
    var value;
    Object.defineProperty(mvvm, key, {
        get: function () {
            if ($target != null) {
                collecter.AddTarget($target);
            }
            if (firstget) {
                var old = $target;
                $target = null;
                value = func.call(mvvm);
                new watcher_1.Watcher(mvvm, vnode, func, function (newval) {
                    value = newval;
                    collecter.Notify();
                });
                $target = old;
                firstget = false;
            }
            return value;
        },
        enumerable: true,
        configurable: true
    });
}
exports.ReactiveComputed = ReactiveComputed;


/***/ }),

/***/ "./src/observer/watcher-collect.ts":
/*!*****************************************!*\
  !*** ./src/observer/watcher-collect.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var msg_queue_1 = __webpack_require__(/*! ./msg-queue */ "./src/observer/msg-queue.ts");
var const_1 = __webpack_require__(/*! ../const */ "./src/const.ts");
var WatcherCollecter = /** @class */ (function () {
    function WatcherCollecter(key) {
        this.key = key;
        this.watches = [];
    }
    WatcherCollecter.prototype.GetKey = function () {
        return this.key;
    };
    WatcherCollecter.prototype.AddTarget = function (watcher) {
        if (this.watches.indexOf(watcher) == -1)
            this.watches.push(watcher);
    };
    WatcherCollecter.prototype.Notify = function () {
        this.watches = this.watches.filter(function (watcher) {
            if (watcher.GetVNode().GetStatus() == const_1.VNodeStatus.ACTIVE) {
                msg_queue_1.AddWatcher(watcher);
                return true;
            }
            if (watcher.GetVNode().GetStatus() == const_1.VNodeStatus.INACTIVE)
                return true;
            if (watcher.GetVNode().GetStatus() == const_1.VNodeStatus.DEPRECATED)
                return false;
        });
    };
    return WatcherCollecter;
}());
exports.WatcherCollecter = WatcherCollecter;


/***/ }),

/***/ "./src/observer/watcher.ts":
/*!*********************************!*\
  !*** ./src/observer/watcher.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ../const */ "./src/const.ts");
var observer_1 = __webpack_require__(/*! ./observer */ "./src/observer/observer.ts");
var Watcher = /** @class */ (function () {
    function Watcher(mvvm, vnode, ExpOrFunc, cb, watchingArrayItem) {
        this.mvvm = mvvm;
        this.vnode = vnode;
        this.ExpOrFunc = ExpOrFunc;
        this.cb = cb;
        this.watchingArrayItem = watchingArrayItem;
        this.deepRecord = [];
        this.value = this.getValue();
        if (this.watchingArrayItem && toString.call(this.value) == "[object Array]") {
            for (var i = 0; i < this.value.length; i++) {
                this.deepRecord[i] = this.value[i];
            }
        }
    }
    Watcher.prototype.getValue = function () {
        observer_1.SetTarget(this);
        var res = this.mvvm.$GetExpOrFunValue(this.ExpOrFunc);
        observer_1.CleanTarget();
        return res;
    };
    Watcher.prototype.GetVNode = function () {
        return this.vnode;
    };
    Watcher.prototype.Update = function () {
        if (this.vnode.GetStatus() == const_1.VNodeStatus.ACTIVE) {
            var newval = this.getValue();
            if (this.value != newval) {
                this.cb(newval, this.value);
                this.value = newval;
            }
            else {
                //判断数组元素是否有变化
                if (this.watchingArrayItem && toString.call(this.value) == "[object Array]") {
                    var diff = false;
                    for (var i = 0; i < newval.length; i++) {
                        if (newval[i] != this.deepRecord[i]) {
                            this.cb(newval, this.value);
                            diff = true;
                            break;
                        }
                    }
                    if (diff) {
                        this.deepRecord = [];
                        for (var i = 0; i < newval.length; i++) {
                            this.deepRecord[i] = newval[i];
                        }
                    }
                }
            }
        }
    };
    return Watcher;
}());
exports.Watcher = Watcher;


/***/ }),

/***/ "./src/router/router-manager.ts":
/*!**************************************!*\
  !*** ./src/router/router-manager.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var router_state_1 = __webpack_require__(/*! ./router-state */ "./src/router/router-state.ts");
var start_1 = __webpack_require__(/*! ../manager/start */ "./src/manager/start.ts");
var matchedRouter = [];
var appRouters = [];
var cursor = -1;
var firstVNode = null;
function RegisterRouter(routers) {
    checkRouter(routers);
    routers.forEach(function (router) {
        router.urls = router.urls.map(function (url) {
            if (url.indexOf("/") != 0)
                return "/" + url;
            else
                return url;
        });
    });
    routers.forEach(function (router) {
        appRouters.push(copyRouter(null, router));
    });
}
exports.RegisterRouter = RegisterRouter;
function checkRouter(routers) {
    routers.forEach(function (router) {
        router.children = router.children ? router.children : [];
        if (router.redirect != null) {
            router.component = "";
            router.url = "";
        }
        if (router.component == null && router.components == null) {
            throw new Error("must specify component or components in router");
        }
        if (router.url == null && router.urls == null) {
            throw new Error("must specify url or urls in router");
        }
        router.params = router.params ? router.params : [];
        router.urls = router.urls ? router.urls : [];
        if (router.url != null)
            router.urls.push(router.url);
        checkRouter(router.children);
    });
}
function copyRouter(parent, router) {
    var r = {
        urls: router.urls,
        component: router.component,
        components: router.components,
        children: [],
        parent: parent,
        fullUrls: [],
        params: router.params,
        redirect: router.redirect,
        marked: false
    };
    if (parent != null) {
        r.urls.forEach(function (url) {
            parent.fullUrls.forEach(function (fullurl) {
                if (url.indexOf("/") == 0) {
                    r.fullUrls.push(url);
                }
                else {
                    if (url == "")
                        r.fullUrls.push(fullurl);
                    else
                        r.fullUrls.push(fullurl + "/" + url);
                }
            });
        });
    }
    else {
        r.urls.forEach(function (url) { return r.fullUrls.push(url); });
    }
    for (var i = 0; i < router.children.length; i++) {
        r.children.push(copyRouter(r, router.children[i]));
    }
    return r;
}
function matchRouter(matchedRouter) {
    var vinallaUrl = location.pathname;
    while (vinallaUrl.endsWith("/")) {
        vinallaUrl = vinallaUrl.substr(0, vinallaUrl.length - 1);
    }
    var vinallaSlice = vinallaUrl.split("/");
    var _loop_1 = function (i) {
        var matchedUrl = matchedRouter.fullUrls[i];
        var matchedSlice = matchedUrl.split("/");
        if (vinallaSlice.length != matchedSlice.length)
            return "continue";
        var params = [];
        for (var j = 0; j < matchedSlice.length; j++) {
            if (/^\:(\w+)$/.test(matchedSlice[j])) {
                if (vinallaSlice[j] != "") {
                    var name_1 = RegExp.$1;
                    params.push({ name: name_1, value: vinallaSlice[j] });
                    continue;
                }
                else {
                    break;
                }
            }
            if (matchedSlice[j] == vinallaSlice[j]) {
                continue;
            }
            break;
        }
        if (j == matchedSlice.length) {
            var requireParams = matchedRouter.params;
            var searchParams = getSearchParams();
            params = params.concat(searchParams);
            requireParams.forEach(function (rp) {
                var exist = params.find(function (p) { return p.name == rp.name; });
                if (exist == null && rp.required) {
                    throw new Error("router match failed,no matched params:" + rp.name);
                }
            });
            return { value: params };
        }
    };
    for (var i = 0; i < matchedRouter.fullUrls.length; i++) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return null;
}
function getSearchParams() {
    var searchSlice = location.search.split("?");
    var res = [];
    if (searchSlice.length == 2) {
        var params = searchSlice[1].split("&");
        params.forEach(function (p) {
            var name_value = p.split("=");
            if (name_value.length == 2) {
                res.push({ name: name_value[0], value: name_value[1] });
            }
        });
    }
    return res;
}
function getLeaf(router) {
    if (router.marked)
        return [];
    if (router.children.length == 0) {
        router.marked = true;
        return [router];
    }
    var res = [];
    router.children.forEach(function (child) {
        res = res.concat(getLeaf(child));
    });
    if (res.length == 0) {
        router.marked = true;
        return [router];
    }
    return res;
}
function clearMark(router) {
    router.children.forEach(function (child) {
        clearMark(child);
    });
    router.marked = false;
}
function matchUrl() {
    appRouters.forEach(function (r) { return clearMark(r); });
    var routers = [];
    var _loop_2 = function () {
        var res = [];
        appRouters.forEach(function (r) {
            res = res.concat(getLeaf(r));
        });
        if (res.length == 0) {
            return "break";
        }
        else {
            routers = routers.concat(res);
        }
    };
    while (true) {
        var state_2 = _loop_2();
        if (state_2 === "break")
            break;
    }
    var redirect = false;
    for (var i = 0; i < routers.length; i++) {
        var router = routers[i];
        if (router.redirect != null) {
            window.history.replaceState(null, "", router.redirect);
            redirect = true;
            break;
        }
        var params = matchRouter(router);
        if (params != null) {
            router_state_1.SetActiveRouter(location.pathname, params);
            matchedRouter = [router];
            var parent_1 = router.parent;
            while (parent_1 != null) {
                matchedRouter.unshift(parent_1);
                parent_1 = parent_1.parent;
            }
            break;
        }
    }
    if (redirect) {
        matchUrl();
    }
}
function NextRouter(vnode, name) {
    if (appRouters == null) {
        throw new Error("no router specified");
    }
    if (cursor == -1) {
        matchUrl();
        firstVNode = vnode;
        cursor = 0;
    }
    if (cursor < matchedRouter.length) {
        var component = name ? matchedRouter[cursor].components[name] : matchedRouter[cursor].component;
        cursor++;
        return component;
    }
    else {
        throw new Error("router match failed");
    }
}
exports.NextRouter = NextRouter;
function MoveBack() {
    cursor--;
}
exports.MoveBack = MoveBack;
function NotifyUrlChange() {
    matchUrl();
    firstVNode.OnRouterChange();
    start_1.RefreshApp();
}
exports.NotifyUrlChange = NotifyUrlChange;


/***/ }),

/***/ "./src/router/router-state.ts":
/*!************************************!*\
  !*** ./src/router/router-state.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ../const */ "./src/const.ts");
var _RouterInfo = /** @class */ (function () {
    function _RouterInfo(path, params) {
        this.path = path;
        this.params = params;
    }
    _RouterInfo.prototype.getParam = function (name) {
        var p = this.params.find(function (p) { return p.name == name; });
        return p && p.value || null;
    };
    return _RouterInfo;
}());
var active = new _RouterInfo("", []);
var listeners = [];
function SetActiveRouter(path, params) {
    var old = new _RouterInfo(path, params);
    active.path = path;
    active.params = params;
    listeners = listeners.filter(function (listen) { return listen.vnode.GetStatus() != const_1.VNodeStatus.DEPRECATED; });
    listeners.forEach(function (listen) {
        if (listen.vnode.GetStatus() == const_1.VNodeStatus.ACTIVE)
            listen.cb(active, old);
    });
}
exports.SetActiveRouter = SetActiveRouter;
function GetActiveRouter() {
    return active;
}
exports.GetActiveRouter = GetActiveRouter;
function WatchRouterChange(vnode, listener) {
    listeners.push({ cb: listener, vnode: vnode });
}
exports.WatchRouterChange = WatchRouterChange;


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ./const */ "./src/const.ts");
function LogError(msg) {
    console.error(msg);
}
exports.LogError = LogError;
function LogInfo(msg) {
    console.log(msg);
}
exports.LogInfo = LogInfo;
function GetNS(str) {
    var res = str.split(":");
    if (res.length == 1)
        return { namespace: null, value: res[0] };
    return { namespace: res[0], value: res.slice(1).join(":") };
}
exports.GetNS = GetNS;
function HttpGet(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    if (xhr.readyState == 4 && xhr.status == 200)
        return xhr.responseText;
    else
        return null;
}
exports.HttpGet = HttpGet;
function IsStringEmpty(str) {
    if (str == null)
        return true;
    str = str.trim();
    if (str == "")
        return true;
    return false;
}
exports.IsStringEmpty = IsStringEmpty;
function Trim(str, char) {
    if (char.length > 1)
        throw new Error("only receve one character");
    var start = -1;
    while (str[start + 1] == char) {
        start++;
    }
    var end = str.length;
    while (str[end - 1] == char) {
        end--;
    }
    return str.substring(start + 1, end);
}
exports.Trim = Trim;
function StrToEvalstr(str) {
    if (const_1.REG_SINGLE.test(str)) {
        return { isconst: false, exp: RegExp.$1 };
    }
    else {
        if (const_1.REG_MULTI.test(str)) {
            var reg = /\{\{([^\{\}]*)\}\}/g;
            var res = reg.exec(str);
            var exp = "";
            var lastindex = 0;
            while (res) {
                if (res.index != lastindex) {
                    exp += "\'" + str.substring(lastindex, res.index) + "\'+";
                }
                lastindex = res.index + res[0].length;
                exp += "(" + RegExp.$1 + ")+";
                res = reg.exec(str);
            }
            if (exp.endsWith("+")) {
                exp = exp.substring(0, exp.length - 1);
            }
            return { isconst: false, exp: exp };
        }
        else {
            return { isconst: true, exp: str };
        }
    }
}
exports.StrToEvalstr = StrToEvalstr;
function InsertDomChild(parent, child, after) {
    if (after == null) {
        if (parent.firstChild != null)
            parent.insertBefore(child, parent.firstChild);
        else
            parent.appendChild(child);
    }
    else {
        if (after.nextSibling != null)
            parent.insertBefore(child, after.nextSibling);
        else
            parent.appendChild(child);
    }
}
exports.InsertDomChild = InsertDomChild;
function TypeOf(param) {
    if (toString.call(param) == "[object Boolean]") {
        return "boolean";
    }
    if (toString.call(param) == "[object Array]") {
        return "array";
    }
    if (toString.call(param) == "[object Number]") {
        return "number";
    }
    if (toString.call(param) == "[object Object]") {
        return "object";
    }
    if (toString.call(param) == "[object Null]") {
        return "object";
    }
    if (toString.call(param) == "[object String]") {
        return "string";
    }
    if (toString.call(param) == "[object Undefined]") {
        throw new Error("function TypeOf: undefined is not allowed");
    }
}
exports.TypeOf = TypeOf;


/***/ }),

/***/ "./src/vdom/vdom.ts":
/*!**************************!*\
  !*** ./src/vdom/vdom.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var components_manager_1 = __webpack_require__(/*! ../manager/components-manager */ "./src/manager/components-manager.ts");
var util_1 = __webpack_require__(/*! ../util */ "./src/util.ts");
var const_1 = __webpack_require__(/*! ../const */ "./src/const.ts");
var vinalla_node_1 = __webpack_require__(/*! ../vnode/vinalla-node */ "./src/vnode/vinalla-node.ts");
var VDom = /** @class */ (function () {
    function VDom() {
        this.Attrs = [];
        this.Children = [];
    }
    VDom.prototype.GetAttr = function (name) {
        for (var i = 0; i < this.Attrs.length; i++) {
            if (this.Attrs[i].Name == name)
                return this.Attrs[i].Value;
        }
        return null;
    };
    VDom.prototype.AddAttr = function (attr) {
        this.Attrs.push({ Name: attr, Value: "" });
    };
    return VDom;
}());
exports.VDom = VDom;
function TraverseDom(dom) {
    if (dom.nodeType == 3 && dom.nodeValue.trim() == "")
        return;
    var root = new VDom();
    root.NodeValue = dom.nodeValue;
    if (root.NodeValue != null) {
        root.NodeValue = root.NodeValue.replace(/\s+/g, "");
    }
    root.NodeName = dom.nodeName.toLowerCase();
    root.NodeType = dom.nodeType;
    if (dom.nodeType == 1) {
        var htmldom = dom;
        for (var i = 0; i < htmldom.attributes.length; i++) {
            root.Attrs.push({ Name: htmldom.attributes[i].name, Value: htmldom.attributes[i].value });
        }
        for (var i = 0; i < htmldom.childNodes.length; i++) {
            var child = TraverseDom(htmldom.childNodes[i]);
            child && root.Children.push(child);
        }
    }
    return root;
}
exports.TraverseDom = TraverseDom;
var Priority;
(function (Priority) {
    Priority[Priority["NORMAL"] = 0] = "NORMAL";
    Priority[Priority["IF"] = 1] = "IF";
    Priority[Priority["FOR"] = 2] = "FOR";
})(Priority = exports.Priority || (exports.Priority = {}));
function NewVNode(dom, mvvm, parent, priority) {
    if (priority === void 0) { priority = Priority.FOR; }
    if (dom.NodeName.toLowerCase() == "slot") {
        var SlotNode = __webpack_require__(/*! ../vnode/slot-node */ "./src/vnode/slot-node.ts").SlotNode;
        var vnode = new SlotNode(dom, mvvm, parent, dom.GetAttr("name"));
        return vnode;
    }
    if (priority >= Priority.FOR && dom.GetAttr(const_1.PRE + "for") != null) {
        var ForNode = __webpack_require__(/*! ../vnode/for-node */ "./src/vnode/for-node.ts").ForNode;
        var vnode = new ForNode(dom, mvvm, parent, dom.GetAttr(const_1.PRE + "for"));
        return vnode;
    }
    if (priority >= Priority.IF && dom.GetAttr(const_1.PRE + "if") != null) {
        var IfNode = __webpack_require__(/*! ../vnode/if-node */ "./src/vnode/if-node.ts").IfNode;
        var vnode = new IfNode(dom, mvvm, parent, dom.GetAttr(const_1.PRE + "if"));
        return vnode;
    }
    if (dom.NodeName == "r-template") {
        var TemplateNode = __webpack_require__(/*! ../vnode/template-node */ "./src/vnode/template-node.ts").TemplateNode;
        var vnode = new TemplateNode(dom, mvvm, parent);
        return vnode;
    }
    if (dom.NodeName == "router-view") {
        var RouterNode = __webpack_require__(/*! ../vnode/router-node */ "./src/vnode/router-node.ts").RouterNode;
        var vnode = new RouterNode(dom, mvvm, parent);
        return vnode;
    }
    var ns = util_1.GetNS(dom.NodeName);
    if (components_manager_1.IsComponentRegistered(ns.value, ns.namespace || "default")) {
        var construct = components_manager_1.InitComponent(ns.value, ns.namespace || "default");
        var selfmvvm = new construct();
        var CustomNode = __webpack_require__(/*! ../vnode/custom-node */ "./src/vnode/custom-node.ts").CustomNode;
        var cust = new CustomNode(dom, mvvm, parent, selfmvvm);
        selfmvvm.$SetFenceNode(cust);
        selfmvvm.$initialize();
        selfmvvm.$AttachChildren();
        return cust;
    }
    return new vinalla_node_1.VinallaNode(dom, mvvm, parent);
}
exports.NewVNode = NewVNode;


/***/ }),

/***/ "./src/vnode/custom-node.ts":
/*!**********************************!*\
  !*** ./src/vnode/custom-node.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ../const */ "./src/const.ts");
var vdom_1 = __webpack_require__(/*! ../vdom/vdom */ "./src/vdom/vdom.ts");
var plug_node_1 = __webpack_require__(/*! ./plug-node */ "./src/vnode/plug-node.ts");
var vnode_1 = __webpack_require__(/*! ./vnode */ "./src/vnode/vnode.ts");
var CustomNode = /** @class */ (function (_super) {
    __extends(CustomNode, _super);
    function CustomNode(Vdom, mvvm, Parent, SurroundMvvm) {
        var _this = _super.call(this, Vdom, mvvm, Parent) || this;
        _this.Vdom = Vdom;
        _this.mvvm = mvvm;
        _this.Parent = Parent;
        _this.SurroundMvvm = SurroundMvvm;
        //输入与输出值
        _this.ins_pure = {};
        _this.ins_exp = {};
        _this.outs = {};
        if (_this.Vdom) {
            for (var i = 0; i < _this.Vdom.Attrs.length; i++) {
                var name_1 = _this.Vdom.Attrs[i].Name;
                var value = _this.Vdom.Attrs[i].Value;
                //输入
                var ins = _this.SurroundMvvm.$InitIns();
                for (var i_1 = 0; i_1 < ins.length; i_1++) {
                    var prop = ins[i_1];
                    if (const_1.REG_IN.test(name_1) && prop.name == RegExp.$1) {
                        _this.ins_exp[RegExp.$1] = value;
                        break;
                    }
                    else {
                        if (prop.name == name_1) {
                            _this.ins_pure[name_1] = value;
                            break;
                        }
                    }
                }
                //输出
                var outs = _this.SurroundMvvm.$InitOuts();
                for (var i_2 = 0; i_2 < outs.length; i_2++) {
                    var event_1 = outs[i_2];
                    if (const_1.REG_OUT.test(name_1) && event_1.name == RegExp.$1) {
                        _this.outs[RegExp.$1] = value;
                        break;
                    }
                }
            }
        }
        return _this;
    }
    CustomNode.prototype.AddIns = function (name, exp) {
        this.ins_exp[name] = exp;
    };
    /**获取跟slot匹配的模版内容 */
    CustomNode.prototype.GetTemplate = function (name) {
        for (var i = 0; i < this.Children.length; i++) {
            var template = this.Children[i];
            if (template.templatename == name)
                return template;
        }
        return null;
    };
    CustomNode.prototype.Render = function () {
        var doms = this.SurroundMvvm.$Render();
        this.DomSet = [doms];
        return this.DomSet;
    };
    CustomNode.prototype.AttachChildren = function () {
        if (this.Vdom != null) {
            //制造中间节点管理template
            var defaultTemplate = new plug_node_1.PlugNode(null, this.mvvm, null, "default");
            var templates = { "default": defaultTemplate };
            //解析子节点
            for (var i = 0; i < this.Vdom.Children.length; i++) {
                var childnode = this.Vdom.Children[i];
                var name_2 = childnode.GetAttr("slot");
                if (name_2 == null || name_2 == "") {
                    name_2 = "default";
                }
                if (templates[name_2] == null) {
                    templates[name_2] = new plug_node_1.PlugNode(null, this.mvvm, null, name_2);
                }
                var vchild = vdom_1.NewVNode(childnode, templates[name_2].mvvm, templates[name_2]);
                vchild.AttachChildren();
                templates[name_2].Children.push(vchild);
            }
            for (var name_3 in templates) {
                this.Children.push(templates[name_3]);
            }
        }
    };
    CustomNode.prototype.GetInValue = function (prop) {
        if (this.ins_pure[prop] != null)
            return this.ins_pure[prop];
        if (this.ins_exp[prop] != null)
            return this.mvvm.$GetExpOrFunValue(this.ins_exp[prop]);
        return null;
    };
    CustomNode.prototype.GetIn = function (prop) {
        if (this.ins_pure[prop] != null)
            return { value: this.ins_pure[prop], const: true };
        if (this.ins_exp[prop] != null)
            return { value: this.ins_exp[prop], const: false };
        return null;
    };
    CustomNode.prototype.GetOut = function (prop) {
        return this.outs[prop];
    };
    CustomNode.prototype.Rerender = function () {
        this.SurroundMvvm.$Refresh();
    };
    CustomNode.prototype.Update = function () {
        this.SurroundMvvm.$Update();
    };
    CustomNode.prototype.OnRemoved = function () {
        this.SurroundMvvm.$OnDestroy();
    };
    CustomNode.prototype.SetStatus = function (status) {
        this.status = status;
        this.SurroundMvvm.$SetStatus(status);
    };
    CustomNode.prototype.Reflow = function () {
    };
    return CustomNode;
}(vnode_1.VNode));
exports.CustomNode = CustomNode;


/***/ }),

/***/ "./src/vnode/directive-node.ts":
/*!*************************************!*\
  !*** ./src/vnode/directive-node.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ../const */ "./src/const.ts");
var DirectiveNode = /** @class */ (function () {
    function DirectiveNode(vdom) {
        var _this = this;
        this.vdom = vdom;
        //输入与输出值
        this.ins_pure = {};
        this.ins_exp = {};
        this.outs = {};
        this.vdom.Attrs.forEach(function (attr) {
            _this.addProperty(attr.Name, attr.Value);
        });
    }
    DirectiveNode.prototype.addProperty = function (name, value) {
        //输入
        if (const_1.REG_IN.test(name)) {
            this.ins_exp[RegExp.$1] = value;
            return;
        }
        //输出
        if (const_1.REG_OUT.test(name)) {
            this.outs[RegExp.$1] = value;
            return;
        }
        this.ins_pure[name] = value;
        return;
    };
    DirectiveNode.prototype.GetIn = function (prop) {
        if (this.ins_pure[prop] != null)
            return { value: this.ins_pure[prop], const: true };
        if (this.ins_exp[prop] != null)
            return { value: this.ins_exp[prop], const: false };
        return null;
    };
    DirectiveNode.prototype.GetOut = function (prop) {
        return this.outs[prop];
    };
    return DirectiveNode;
}());
exports.DirectiveNode = DirectiveNode;


/***/ }),

/***/ "./src/vnode/for-node.ts":
/*!*******************************!*\
  !*** ./src/vnode/for-node.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ../const */ "./src/const.ts");
var eval_1 = __webpack_require__(/*! ../eval */ "./src/eval.js");
var models_1 = __webpack_require__(/*! ../models */ "./src/models.ts");
var mvvm_1 = __webpack_require__(/*! ../mvvm/mvvm */ "./src/mvvm/mvvm.ts");
var vdom_1 = __webpack_require__(/*! ../vdom/vdom */ "./src/vdom/vdom.ts");
var const_2 = __webpack_require__(/*! ./../const */ "./src/const.ts");
var vnode_1 = __webpack_require__(/*! ./vnode */ "./src/vnode/vnode.ts");
var ForNode = /** @class */ (function (_super) {
    __extends(ForNode, _super);
    function ForNode(Vdom, mvvm, Parent, originForExp) {
        var _this = _super.call(this, Vdom, mvvm, Parent) || this;
        _this.Vdom = Vdom;
        _this.mvvm = mvvm;
        _this.Parent = Parent;
        _this.originForExp = originForExp;
        var forSplit = _this.originForExp.trim().split(/\s+/);
        _this.ForExp = new models_1.ForExp(forSplit[0], forSplit[2]);
        return _this;
    }
    ForNode.prototype.newCopyNode = function (n) {
        var itemexp = this.ForExp.itemExp;
        var itemexpValue = this.ForExp.arrayExp + "[" + n + "]";
        var that = this;
        var mvvm = new (/** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.$hirented = that.mvvm;
                return _this;
            }
            class_1.prototype.$InitDataItems = function () {
                return [];
            };
            class_1.prototype.$InitComputeItems = function () {
                return [];
            };
            class_1.prototype.$Render = function () {
                return null;
            };
            class_1.prototype.$InitTreeroot = function () {
                return null;
            };
            class_1.prototype.$InitNamespace = function () {
                return that.mvvm.$InitNamespace();
            };
            class_1.prototype.$GetExpOrFunValue = function (exp) {
                var mvvm = this.$ExtendMvvm();
                return eval_1.EvalExp(mvvm, exp);
            };
            class_1.prototype.$ExtendMvvm = function () {
                var mvvm = that.mvvm.$ExtendMvvm();
                Object.defineProperty(mvvm, itemexp, {
                    get: function () {
                        return mvvm.$GetExpOrFunValue(itemexpValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(mvvm, "$index", {
                    value: n,
                    configurable: true,
                    enumerable: true
                });
                return mvvm;
            };
            class_1.prototype.$RevokeMethod = function (method) {
                var params = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    params[_i - 1] = arguments[_i];
                }
                var mvvm = this.$ExtendMvvm();
                mvvm.$RevokeMethod.apply(mvvm, [method].concat(params));
            };
            return class_1;
        }(mvvm_1.Mvvm)));
        var vnode = vdom_1.NewVNode(this.Vdom, mvvm, this, vdom_1.Priority.IF);
        vnode.AttachChildren();
        return vnode;
    };
    ForNode.prototype.implementForExp = function (newcount) {
        var _this = this;
        if (newcount > this.Children.length) {
            var custnodes = [];
            for (var i = this.Children.length; i < newcount; i++) {
                var custnode = this.newCopyNode(i);
                custnodes.push(custnode);
            }
            custnodes.forEach(function (custnode) {
                _this.Children.push(custnode);
                _this.DomSet = _this.DomSet.concat(custnode.Render());
            });
            this.Parent.Reflow();
            return;
        }
        if (newcount < this.Children.length) {
            var moved = this.Children.splice(newcount);
            moved.forEach(function (moveditem) {
                _this.DomSet.forEach(function (dom) {
                    var exist = moveditem.DomSet.some(function (moveddom) {
                        return moveddom.dom == dom.dom;
                    });
                    if (exist) {
                        dom.type = const_2.DomType.DELETE;
                    }
                });
            });
            moved.forEach(function (vnode) { return vnode.SetStatus(const_1.VNodeStatus.DEPRECATED); });
            moved.forEach(function (item) {
                item.OnRemoved();
            });
        }
    };
    ForNode.prototype.Update = function () {
        var items = this.mvvm.$GetExpOrFunValue(this.ForExp.arrayExp);
        if (toString.call(items) === "[object Array]") {
            this.implementForExp(items.length);
        }
    };
    ForNode.prototype.AttachChildren = function () {
        var num = this.mvvm.$GetExpOrFunValue(this.ForExp.arrayExp + ".length");
        for (var i = 0; i < num; i++) {
            this.Children.push(this.newCopyNode(i));
        }
    };
    ForNode.prototype.Render = function () {
        var _this = this;
        this.mvvm.$CreateWatcher(this, this.ForExp.arrayExp + ".length", this.implementForExp.bind(this));
        this.Children.forEach(function (child) {
            _this.DomSet = _this.DomSet.concat(child.Render());
        });
        return this.DomSet;
    };
    ForNode.prototype.OnRemoved = function () {
        this.Children.forEach(function (vnode) { return vnode.OnRemoved(); });
    };
    ForNode.prototype.SetStatus = function (status) {
        this.status = status;
        this.Children.forEach(function (vnode) { return vnode.SetStatus(status); });
    };
    return ForNode;
}(vnode_1.VNode));
exports.ForNode = ForNode;


/***/ }),

/***/ "./src/vnode/if-node.ts":
/*!******************************!*\
  !*** ./src/vnode/if-node.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ./../const */ "./src/const.ts");
var vnode_1 = __webpack_require__(/*! ./vnode */ "./src/vnode/vnode.ts");
var vdom_1 = __webpack_require__(/*! ../vdom/vdom */ "./src/vdom/vdom.ts");
var IfNode = /** @class */ (function (_super) {
    __extends(IfNode, _super);
    function IfNode(Vdom, mvvm, Parent, ifExp) {
        var _this = _super.call(this, Vdom, mvvm, Parent) || this;
        _this.Vdom = Vdom;
        _this.mvvm = mvvm;
        _this.Parent = Parent;
        _this.ifExp = ifExp;
        return _this;
    }
    IfNode.prototype.AttachChildren = function () {
        var boolvalue = this.mvvm.$GetExpOrFunValue(this.ifExp);
        if (boolvalue) {
            var vnode = vdom_1.NewVNode(this.Vdom, this.mvvm, null, vdom_1.Priority.NORMAL);
            vnode.AttachChildren();
            this.Children = [vnode];
        }
    };
    IfNode.prototype.Render = function () {
        var _this = this;
        this.Children.forEach(function (child) {
            _this.DomSet = _this.DomSet.concat(child.Render());
        });
        this.mvvm.$CreateWatcher(this, this.ifExp, function (newvalue) { return _this.reImpletement(newvalue); });
        return this.DomSet;
    };
    IfNode.prototype.Update = function () {
        var attached = this.mvvm.$GetExpOrFunValue(this.ifExp);
        this.reImpletement(attached);
    };
    IfNode.prototype.reImpletement = function (newvalue) {
        var _this = this;
        if (newvalue) {
            var vnode = vdom_1.NewVNode(this.Vdom, this.mvvm, null, vdom_1.Priority.NORMAL);
            vnode.AttachChildren();
            this.Children = [vnode];
            this.Children.forEach(function (child) {
                _this.DomSet = _this.DomSet.concat(child.Render());
            });
            this.Parent.Reflow();
        }
        else {
            this.Children = [];
            this.DomSet.forEach(function (dom) {
                dom.type = const_1.DomType.DELETE;
            });
        }
    };
    IfNode.prototype.OnRemoved = function () {
        if (this.Children.length > 0)
            this.Children[0].OnRemoved();
    };
    IfNode.prototype.SetStatus = function (status) {
        this.status = status;
        if (this.Children.length > 0)
            this.Children[0].SetStatus(status);
    };
    return IfNode;
}(vnode_1.VNode));
exports.IfNode = IfNode;


/***/ }),

/***/ "./src/vnode/plug-node.ts":
/*!********************************!*\
  !*** ./src/vnode/plug-node.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var vnode_1 = __webpack_require__(/*! ./vnode */ "./src/vnode/vnode.ts");
var PlugNode = /** @class */ (function (_super) {
    __extends(PlugNode, _super);
    function PlugNode(vdom, mvvm, Parent, templatename) {
        var _this = _super.call(this, vdom, mvvm, Parent) || this;
        _this.vdom = vdom;
        _this.mvvm = mvvm;
        _this.Parent = Parent;
        _this.templatename = templatename;
        return _this;
    }
    PlugNode.prototype.Render = function () {
        var _this = this;
        this.Children.forEach(function (child) {
            var doms = child.Render();
            _this.DomSet = _this.DomSet.concat(doms);
        });
        return this.DomSet;
    };
    PlugNode.prototype.Update = function () {
        var children = [];
        this.Children.forEach(function (child) {
            children.push(child);
        });
        children.forEach(function (child) {
            child.Update();
        });
    };
    return PlugNode;
}(vnode_1.VNode));
exports.PlugNode = PlugNode;


/***/ }),

/***/ "./src/vnode/router-node.ts":
/*!**********************************!*\
  !*** ./src/vnode/router-node.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ./../const */ "./src/const.ts");
var vnode_1 = __webpack_require__(/*! ./vnode */ "./src/vnode/vnode.ts");
var custom_node_1 = __webpack_require__(/*! ./custom-node */ "./src/vnode/custom-node.ts");
var components_manager_1 = __webpack_require__(/*! ../manager/components-manager */ "./src/manager/components-manager.ts");
var util_1 = __webpack_require__(/*! ../util */ "./src/util.ts");
var router_manager_1 = __webpack_require__(/*! ../router/router-manager */ "./src/router/router-manager.ts");
var RouterNode = /** @class */ (function (_super) {
    __extends(RouterNode, _super);
    function RouterNode(Vdom, mvvm, Parent) {
        var _this = _super.call(this, Vdom, mvvm, Parent) || this;
        _this.Vdom = Vdom;
        _this.mvvm = mvvm;
        _this.Parent = Parent;
        return _this;
    }
    RouterNode.prototype.Render = function () {
        var router = router_manager_1.NextRouter(this);
        if (router != null) {
            var vnode = this.instance(router);
            this.Children = [vnode];
            this.DomSet = vnode.Render();
            router_manager_1.MoveBack();
        }
        return this.DomSet;
    };
    RouterNode.prototype.OnRouterChange = function () {
        var router = router_manager_1.NextRouter(this);
        if (router != null) {
            var vnode = this.instance(router);
            this.Children = [vnode];
            this.DomSet.forEach(function (dom) { return dom.type = const_1.DomType.DELETE; });
            this.DomSet = this.DomSet.concat(vnode.Render());
            this.Parent.Reflow();
            router_manager_1.MoveBack();
        }
        else {
            this.Children = [];
            this.DomSet.forEach(function (dom) {
                dom.type = const_1.DomType.DELETE;
            });
        }
    };
    RouterNode.prototype.instance = function (componentStr) {
        var ns = util_1.GetNS(componentStr);
        if (ns.namespace == null)
            ns.namespace = "default";
        var construct = components_manager_1.InitComponent(ns.value, ns.namespace);
        if (construct == null) {
            throw new Error("router can not find component name:" + ns.value + ",namespace:" + ns.namespace);
        }
        var mvvm = new construct();
        var custnode = new custom_node_1.CustomNode(null, this.mvvm, null, mvvm);
        mvvm.$SetFenceNode(custnode);
        mvvm.$initialize();
        mvvm.$AttachChildren();
        return custnode;
    };
    RouterNode.prototype.Update = function () {
    };
    RouterNode.prototype.Reflow = function () {
    };
    return RouterNode;
}(vnode_1.VNode));
exports.RouterNode = RouterNode;


/***/ }),

/***/ "./src/vnode/slot-node.ts":
/*!********************************!*\
  !*** ./src/vnode/slot-node.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var vnode_1 = __webpack_require__(/*! ./vnode */ "./src/vnode/vnode.ts");
var SlotNode = /** @class */ (function (_super) {
    __extends(SlotNode, _super);
    function SlotNode(vdom, mvvm, Parent, name) {
        var _this = _super.call(this, vdom, mvvm, Parent) || this;
        _this.vdom = vdom;
        _this.mvvm = mvvm;
        _this.Parent = Parent;
        _this.name = name;
        if (_this.name == null || _this.name == "")
            _this.name = "default";
        return _this;
    }
    SlotNode.prototype.Render = function () {
        var template = this.mvvm.$GetFenceNode().GetTemplate(this.name);
        if (template != null) {
            template.Parent = this;
            this.Children = [template];
            this.DomSet = template.Render();
        }
        return this.DomSet;
    };
    SlotNode.prototype.Update = function () {
        var template = this.mvvm.$GetFenceNode().GetTemplate(this.name);
        if (template != null) {
            template.Update();
        }
    };
    SlotNode.prototype.SetStatus = function (status) {
        this.status = status;
        var template = this.mvvm.$GetFenceNode().GetTemplate(this.name);
        template.SetStatus(status);
    };
    SlotNode.prototype.OnRemoved = function () {
        var template = this.mvvm.$GetFenceNode().GetTemplate(this.name);
        template.OnRemoved();
    };
    return SlotNode;
}(vnode_1.VNode));
exports.SlotNode = SlotNode;


/***/ }),

/***/ "./src/vnode/template-node.ts":
/*!************************************!*\
  !*** ./src/vnode/template-node.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var vnode_1 = __webpack_require__(/*! ./vnode */ "./src/vnode/vnode.ts");
var TemplateNode = /** @class */ (function (_super) {
    __extends(TemplateNode, _super);
    function TemplateNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateNode.prototype.Render = function () {
        var _this = this;
        this.Children.forEach(function (child) {
            _this.DomSet = _this.DomSet.concat(child.Render());
        });
        return this.DomSet;
    };
    TemplateNode.prototype.Update = function () {
    };
    return TemplateNode;
}(vnode_1.VNode));
exports.TemplateNode = TemplateNode;


/***/ }),

/***/ "./src/vnode/vinalla-node.ts":
/*!***********************************!*\
  !*** ./src/vnode/vinalla-node.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var inner_dir_1 = __webpack_require__(/*! ../directive/inner-dir */ "./src/directive/inner-dir.ts");
var directive_manager_1 = __webpack_require__(/*! ../manager/directive-manager */ "./src/manager/directive-manager.ts");
var util_1 = __webpack_require__(/*! ../util */ "./src/util.ts");
var const_1 = __webpack_require__(/*! ./../const */ "./src/const.ts");
var directive_node_1 = __webpack_require__(/*! ./directive-node */ "./src/vnode/directive-node.ts");
var vnode_1 = __webpack_require__(/*! ./vnode */ "./src/vnode/vnode.ts");
var VinallaNode = /** @class */ (function (_super) {
    __extends(VinallaNode, _super);
    function VinallaNode(Vdom, mvvm, Parent) {
        var _this = _super.call(this, Vdom, mvvm, Parent) || this;
        _this.Vdom = Vdom;
        _this.mvvm = mvvm;
        _this.Parent = Parent;
        _this.directives = [];
        _this.innerDirective = [];
        _this.nodeValue = _this.Vdom.NodeValue;
        _this.nodeName = _this.Vdom.NodeName;
        _this.nodeType = _this.Vdom.NodeType;
        //保存元素属性
        var vanillaAttrs = _this.Vdom.Attrs;
        var _loop_1 = function (i) {
            var attr = this_1.Vdom.Attrs[i];
            var ns = util_1.GetNS(attr.Name);
            if (ns.namespace == null)
                ns.namespace = this_1.mvvm.$InitNamespace();
            if (directive_manager_1.IsDirectiveRegistered(ns.value, ns.namespace)) {
                var dirNode = new directive_node_1.DirectiveNode(this_1.Vdom);
                var dirCons = directive_manager_1.GetDirectiveCon(ns.value, ns.namespace);
                var dirMvvm_1 = new dirCons(dirNode, this_1);
                vanillaAttrs = vanillaAttrs.filter(function (attr) {
                    var name = attr.Name;
                    if (const_1.REG_IN.test(attr.Name) || const_1.REG_OUT.test(attr.Name))
                        name = RegExp.$1;
                    var isprop = dirMvvm_1.$Ins.some(function (prop) { return prop.name == name; });
                    var isevent = dirMvvm_1.$Outs.some(function (event) { return event == name; });
                    return !(isprop || isevent);
                });
                this_1.directives.push(dirMvvm_1);
                return { value: _this };
            }
        };
        var this_1 = this;
        for (var i = 0; i < _this.Vdom.Attrs.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        vanillaAttrs = vanillaAttrs.filter(function (attr) {
            if (const_1.REG_IN.test(attr.Name)) {
                var dir_1 = inner_dir_1.GetInnerDir(RegExp.$1);
                if (dir_1 != null) {
                    _this.innerDirective.push({ dir: dir_1, isconst: false, exp: attr.Value });
                    return false;
                }
            }
            var dir = inner_dir_1.GetInnerDir(attr.Name);
            if (dir != null) {
                _this.innerDirective.push({ dir: dir, isconst: true, exp: attr.Value });
                return false;
            }
            return true;
        });
        vanillaAttrs.forEach(function (attr) {
            if (const_1.REG_ATTR.test(attr.Name)) {
                _this.attrs.push({ name: attr.Name, value: attr.Value });
            }
        });
        return _this;
    }
    VinallaNode.prototype.OnRemoved = function () {
        _super.prototype.OnRemoved.call(this);
        this.directives.forEach(function (dir) { return dir.$OnDestroy(); });
    };
    VinallaNode.prototype.directiveBind = function () {
        var _this = this;
        this.directives.forEach(function (dir) { return dir.$Render(); });
        this.innerDirective.forEach(function (item) {
            item.dir(item.exp, _this, item.isconst);
        });
    };
    VinallaNode.prototype.Render = function () {
        var _this = this;
        if (this.nodeType == 1) {
            var dom_1 = document.createElement(this.nodeName);
            this.attrs.forEach(function (prop) {
                dom_1.setAttribute(prop.name, prop.value);
            });
            this.DomSet = [{ type: const_1.DomType.NEW, dom: dom_1 }];
            this.Children.forEach(function (child) {
                var childdomset = child.Render();
                childdomset.forEach(function (childdom) {
                    _this.DomSet[0].dom.appendChild(childdom.dom);
                });
                childdomset.forEach(function (childom) {
                    childom.type = const_1.DomType.CONSTANT;
                });
            });
            this.directiveBind();
            return this.DomSet;
        }
        if (this.nodeType == 3) {
            var dom_2 = document.createTextNode(this.nodeValue);
            this.DomSet = [{ type: const_1.DomType.NEW, dom: dom_2 }];
            var evalexp = util_1.StrToEvalstr(this.nodeValue);
            if (!evalexp.isconst) {
                dom_2.textContent = this.mvvm.$GetExpOrFunValue(evalexp.exp);
                this.mvvm.$CreateWatcher(this, evalexp.exp, function (newvalue, oldvalue) {
                    dom_2.textContent = newvalue;
                });
            }
            else {
                dom_2.textContent = evalexp.exp;
            }
            return this.DomSet;
        }
        if (this.nodeType == 8) {
            var dom = document.createComment(this.nodeValue);
            this.DomSet = [{ type: const_1.DomType.NEW, dom: dom }];
            return this.DomSet;
        }
    };
    VinallaNode.prototype.Rerender = function () {
        this.DomSet.forEach(function (dom) { return dom.type = const_1.DomType.CONSTANT; });
        if (this.nodeType == 1) {
            var thedom_1 = this.DomSet[0].dom;
            var childdom_1 = null;
            this.Children.forEach(function (child) {
                child.DomSet.forEach(function (domstate) {
                    if (domstate.type == const_1.DomType.CONSTANT) {
                        childdom_1 = domstate.dom;
                        return;
                    }
                    if (domstate.type == const_1.DomType.NEW) {
                        util_1.InsertDomChild(thedom_1, domstate.dom, childdom_1);
                        childdom_1 = domstate.dom;
                        return;
                    }
                    if (domstate.type == const_1.DomType.DELETE) {
                        thedom_1.removeChild(domstate.dom);
                        return;
                    }
                });
            });
        }
        this.Children.forEach(function (child) { return child.Rerender(); });
    };
    VinallaNode.prototype.Update = function () {
        //todo 更新属性
        if (this.nodeType == 1) {
            var children_1 = [];
            this.Children.forEach(function (child) {
                children_1.push(child);
            });
            children_1.forEach(function (child) {
                child.Update();
            });
            //todo 设置属性
            return;
        }
        if (this.nodeType == 3) {
            var evalexp = util_1.StrToEvalstr(this.nodeValue);
            if (!evalexp.isconst) {
                this.DomSet[0].dom.textContent = this.mvvm.$GetExpOrFunValue(evalexp.exp);
            }
            else {
                this.DomSet[0].dom.textContent = evalexp.exp;
            }
        }
    };
    VinallaNode.prototype.Reflow = function () {
    };
    return VinallaNode;
}(vnode_1.VNode));
exports.VinallaNode = VinallaNode;


/***/ }),

/***/ "./src/vnode/vnode.ts":
/*!****************************!*\
  !*** ./src/vnode/vnode.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var vdom_1 = __webpack_require__(/*! ../vdom/vdom */ "./src/vdom/vdom.ts");
var const_1 = __webpack_require__(/*! ./../const */ "./src/const.ts");
var VNode = /** @class */ (function () {
    function VNode(Vdom, mvvm, Parent) {
        this.Vdom = Vdom;
        this.mvvm = mvvm;
        this.Parent = Parent;
        /**普通属性 */
        this.attrs = [];
        this.Children = [];
        this.DomSet = [];
        this.status = const_1.VNodeStatus.ACTIVE;
        if (this.Vdom != null) {
            this.nodeValue = this.Vdom.NodeValue;
            this.nodeName = this.Vdom.NodeName;
            this.nodeType = this.Vdom.NodeType;
        }
    }
    VNode.prototype.Reflow = function () {
        var _this = this;
        this.DomSet = [];
        this.Children.forEach(function (child) {
            _this.DomSet = _this.DomSet.concat(child.DomSet);
        });
        if (this.Parent != null)
            this.Parent.Reflow();
    };
    VNode.prototype.Rerender = function () {
        this.DomSet = this.DomSet.filter(function (dom) { return dom.type != const_1.DomType.DELETE; });
        this.Children.forEach(function (child) { return child.Rerender(); });
    };
    VNode.prototype.OnRemoved = function () {
        this.Children.forEach(function (child) {
            child.OnRemoved();
        });
    };
    VNode.prototype.AttachChildren = function () {
        //解析子节点
        for (var i = 0; i < this.Vdom.Children.length; i++) {
            var childdom = this.Vdom.Children[i];
            var vchild = vdom_1.NewVNode(childdom, this.mvvm, this);
            if (vchild != null) {
                vchild.AttachChildren();
                this.Children.push(vchild);
            }
        }
    };
    VNode.prototype.SetStatus = function (status) {
        this.status = status;
        this.Children.forEach(function (child) {
            child.SetStatus(status);
        });
    };
    VNode.prototype.GetStatus = function () {
        return this.status;
    };
    VNode.prototype.OnRouterChange = function () {
        this.Children.forEach(function (child) { return child.OnRouterChange(); });
    };
    VNode.prototype.NavigateTo = function (url) {
        if (this.mvvm.$IsRoot()) {
            this.mvvm.$NavigateTo(url);
        }
        else {
            if (this.Parent != null)
                this.Parent.NavigateTo(url);
            else {
                this.mvvm.$GetFenceNode().NavigateTo(url);
            }
        }
    };
    VNode.prototype.GetNodeName = function () {
        return this.nodeName.toLowerCase();
    };
    return VNode;
}());
exports.VNode = VNode;


/***/ })

/******/ });
});
//# sourceMappingURL=rio.umd.js.map