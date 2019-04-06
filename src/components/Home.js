import React, { Component } from 'react'
import Login from '../auth/Login'
import UserList from '../pages/User/List'

export class Home extends Component {
  render() {
    const { isAuthenticated } = this.props
    return <div>{isAuthenticated ? <UserList /> : <Login />}</div>
  }
}

export default Home
