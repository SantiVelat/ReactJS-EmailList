import React, { Component } from 'react'
import UserList from './UserList'
import UserForm from './UserForm'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      users: [
        {id: 1, name: 'santi', email: 'snt.mv13@gmail.com'},
        {id: 2, name: 'santi2', email: 'snt.v.01@gmail.com'}
      ]
    }
  }

  handleOnAddUser (event) {
    event.preventDefault()
    let user = {
      name: event.target.name.value,
      email: event.target.email.value
    }
    this.setState({
      users: this.state.users.concat([user])
    })
  }

  render () {
    console.log(this.state.users)
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Bienvenido a React</h2>
        </div>
        <div>
          <p><strong>Añade usuarios</strong></p>
          <UserList users={this.state.users} />
          <UserForm onAddUser={this.handleOnAddUser.bind(this)} />
        </div>
      </div>
    )
  }
}

export default App
