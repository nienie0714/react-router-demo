import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';

/**
 * 受保护的组件
 *
 * 当通过函数来定义组件的时候，参数是属性对象
 * 继承Component类包括状态，不需要状态就可以使用函数式声明
 */
/*props = {path:"./profile", component:Profile}  解构赋值，rest其余参数 rest={path:"./profile"}*/
export default function({component:Component, ...rest}) {
  /*...展开运算符 <Route path="./profile"/> */
  return <Route {...rest} render={(props)=>
    localStorage.getItem('login')?<Component/> : <Redirect to={{pathname:'./login', state:{from:props.location.pathname} }} />
  }/>
}