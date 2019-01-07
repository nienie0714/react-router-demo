import React from 'react'
import {
  BrowserRouter as Router, // 容器  HashRouter(有#号，重复路径点击报错)
  Route, // 一条路由
  Link,
  Switch
} from 'react-router-dom'
import Home from './Home';  // 主页
import User from './User';  // 用户
import Profile from './Profile'; // 个人设置
import './App.css'
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import MenuLink from './MenuLink';

export default (
  <Router>
    <div>
      <nav className="navbar navbar-inverse" role="navigation" style={{padding: 0}}>
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="navbar-brand">
              用户管理系统
            </div>
          </div>
          <ul className="nav navbar-nav" style={{flexDirection: 'row'}}>
            <MenuLink label="首页" to="/home"></MenuLink>
            <MenuLink label="用户管理" to="/user"></MenuLink>
            <MenuLink label="个人设置" to="/profile"></MenuLink>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/*如果有一个匹配就不再继续走下去*/}
            <Switch>
              {/*exact精确匹配。路径完全相等，并非匹配前缀*/}
              <Route path="/" exact render={props=><div>首页</div>}></Route>
              <Route path="/home" component={Home}></Route>
              <Route path="/user" component={User}></Route>
              <Route path="/login" component={Login}></Route>
              <ProtectedRoute path="/profile" component={Profile}></ProtectedRoute>
              <Route path="/:name" render={props=><div>{props.match.params.name}</div>}></Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  </Router>
)