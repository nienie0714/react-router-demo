import React, { Component } from 'react';

/**
 * UserList
 */
export default class UserDetail extends Component{
    constructor() {
        super();
        this.state = {}
    }

    render() {
      // this.props
      /**
       * history 跳转路由 路径
       * match 匹配结果，如果匹配上就是对象，匹配不上就是null
       * location 当前路径  pathname当前路径
       */
      let id = parseInt(this.props.match.params.id);
      let userStr = localStorage.getItem('users');
      // 转成对象数组
      let users = userStr?JSON.parse(userStr):[];
      let user = users.find(user=>user.id === id);
      return (
          <div>
            <table className="table table-striped">
              <tbody>
              <tr>
                <td>ID</td>
                <td>name</td>
              </tr>
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
              </tr>
              </tbody>
            </table>
          </div>
      )
    }
}