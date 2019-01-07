import React, { Component } from 'react';

/**
 * UserList
 */
export default class UserAdd extends Component{
    constructor() {
        super();
        this.state = {}
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        let name = this.name.value;
        let userStr = localStorage.getItem('users');
        // 转成对象数组
        let users = userStr?JSON.parse(userStr):[];
        // 加入新的对象
        users.push({id:Date.now(), name});
        // 新数组保存到缓存中
        localStorage.setItem('users', JSON.stringify(users));
        // 跳转
        this.props.history.push('/user/list');
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">姓名</label>
                {/* 虚拟元素挂载到真实dom中去，调用。ref代表真实dom元素  把input真实dom元素挂载到name实例上去*/}
                <input type="text" className="form-control" ref={ref=>this.name=ref} />
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-success"/>
              </div>
            </form>
        )
    }
}