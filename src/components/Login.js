import React, { Component } from 'react';
import {Link} from 'react-router-dom'

/**
 * UserList
 */
export default function(props) {
  return <button className="btn btn-success" onClick={()=>{
    localStorage.setItem('login', 'true');
    props.history.push(props.location.state.from);
  }}>登录</button>
}