import React, { Component } from 'react';
import {Link} from 'react-router-dom'

/**
 * UserList
 */
export default class UserList extends Component{
    constructor() {
        super();
        this.state = {
          users: []
        }
    }

    componentWillMount() {
      let userStr = localStorage.getItem('users');
      // 转成对象数组
      let users = userStr?JSON.parse(userStr):[];
      this.setState({users});
    }

    render() {
        return (
            <ul className="list-group">
              {
                this.state.users.map((user, index)=>(
                  <li className="list-group-item" key={index}>
                    <Link to={"/user/detail/"+user.id}>{user.name}</Link>
                  </li>
                ))
              }
            </ul>
        )
    }
}