import React, { Component } from 'react';

class App extends Component {
  render() {
    const title = 'User App';
    const isAuthorized = false;

    return (
      <div className='container'>
        <h5>{title}</h5>

        {isAuthorized ? <p>Authorized</p> : <p>Not Authorized</p>}
      </div>
    );
  }
}

export default App;
