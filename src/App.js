import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      users: [
        {id: 1, name: 'miguel', email: 'test@miguelgomez.io'},
        {id: 2, name: 'test', email: 'test@test.es'}
      ]
    }
  }

  render () {
    return (
      <UserList users={this.state.users} />
    )
  }
}

export default App
