import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';

/**
 * UserList
 */
export default class UserAdd extends Component{
    constructor(props) {
        super(props);
        this.state = {
          // 默认不阻止跳转
          blocking: false
        }
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
        // 先设置状态再跳转，否则会出现Prompt弹出框
        this.setState({blocking: false}, ()=>{
          // 跳转
          this.props.history.push('/user/list');
        });

    };

    handleChange=(event)=>{
      this.setState({blocking: event.target.value && event.target.value.length >0})
    };

    render() {
        return (
            <div>
              <Prompt when={this.state.blocking} message={(location) => `输入框有内容，你确定你要跳转到${location.pathname}`}/>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">姓名</label>
                  {/* 虚拟元素挂载到真实dom中去，调用。ref代表真实dom元素  把input真实dom元素挂载到name实例上去*/}
                  <input type="text" className="form-control" ref={ref=>this.name=ref} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <input type="submit" className="btn btn-success"/>
                </div>
              </form>
            </div>
        )
    }
}