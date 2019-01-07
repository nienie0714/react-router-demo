import React, { Component } from 'react';
import {
  Link,
  Route
} from 'react-router-dom'
import UserList from './UserList';
import UserAdd from './UserAdd';
import UserDetail from './UserDetail';

/**
 * 用户
 */
export default class User extends Component{
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="row">
              <div className="col-md-2">
                <ul className="nav nav-stacked">
                  <li><Link to="/user/list">用户列表</Link></li>
                  <li><Link to="/user/add">新增用户</Link></li>
                </ul>
              </div>
              <div className="col-md-10">
                <Route path="/user/list" component={UserList}></Route>
                <Route path="/user/add" component={UserAdd}></Route>
                <Route path="/user/detail/:id" component={UserDetail}></Route>
              </div>
            </div>
        )
    }
}