import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

/**
 * 希望一个组件不管是否匹配都显示一些东西
 *
 * component对应一个组件，当URL路径跟当前Route path匹配时渲染
 * render 对应一个匿名组件函数，当URL路径跟当前Route path匹配时渲染
 */
export default function({to, label}) {
  // children不管当前路径是否匹配上，都会渲染对应的组件
  return (
    <Route path={to} children={({match})=>{
      return <li className={match?'active':''}><Link to={to}>{label}</Link></li>
    }}/>
  )
}