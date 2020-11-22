import React, { Component } from 'react';
import AddUser from './components/AddUser';
import Users from './components/Users';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 1,
          name: 'ilayda Özdemir',
          email: 'ozdemirilayda@gmail.com',
        },
        {
          id: 2,
          name: 'Nihat Özdemir',
          email: 'ozdemir@gmail.com',
        },
        {
          id: 3,
          name: 'Gürkan Yeşil',
          email: 'yesil@gmail.com',
        },
      ],
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  addUser(newUser) {
    let updatedUsers = this.state.users;
    updatedUsers.push(newUser);

    this.setState({
      users: updatedUsers,
    });
  }

  deleteUser(id) {
    let updatedUsers = this.state.users;

    updatedUsers = updatedUsers.filter(user => user.id !== id);

    //state direct innutable
    this.setState({
      users: updatedUsers,
    });
  }

  render() {
    const title = 'User App';

    return (
      <div className='container'>
        <h3>{title}</h3>
        <hr />
        <AddUser addUser={this.addUser} myUsers={this.state.users} />
        <hr />
        <Users deleteUser={this.deleteUser} users={this.state.users} />
      </div>
    );
  }
}

export default App;
