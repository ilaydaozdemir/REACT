import React, { Component } from 'react';

class AddUser extends Component {
  state = {
    name: '',
    email: '',
  };

  onNameChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  onAddSubmit(e) {
    if (this.state.name === '') {
      return;
    }
    if (this.state.email === '') {
      return;
    }
    console.log(this.props.myUsers.length);
    const newUser = {
      id: this.props.myUsers.length + 1,
      name: this.state.name,
      email: this.state.email,
    };
    console.log(newUser);
    this.props.addUser(newUser);

    e.preventDefault();
    this.setState({ email: '', name: '' });
  }

  render() {
    const { name, email } = this.state;

    return (
      <div className='card'>
        <h4 className='card-header'>Add New User</h4>
        <div className='card-body'>
          <form onSubmit={this.onAddSubmit.bind(this)}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                placeholder='Enter Name'
                className='form-control'
                value={name}
                onChange={this.onNameChange.bind(this)}
              />

              <label htmlFor='email'>Email</label>
              <input
                type='text'
                email='email'
                placeholder='Enter Email'
                className='form-control'
                value={email}
                onChange={this.onEmailChange.bind(this)}
              />
            </div>
            <button type='submit' className='btn btn-danger btn-block'>
              Add New User
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default AddUser;
