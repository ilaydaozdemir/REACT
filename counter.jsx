import React, { Component } from 'react';

class Counter extends Component {
  state = {
    //degıstırmek ıstedıgımız seylerı state de tanımlıyorum
    count: 0,
    //imgUrl: 'https://picsum.photos/200',
  };

  styles = {
    fontSize: 50,
    fontWeight: 'bold',
    //span style={{fontSize:30}} kullanabılırım
  };
  render() {
    return (
      <div>
        <img src={this.state.imgUrl} />
        <span style={this.styles} className='badge badge-primary m-2'>
          {this.formatCount()}
        </span>
        <button>Increment</button>
      </div>
    );
  }

  formatCount() {
    // return this.state.count === 0 ? 'zero' : this.state.count;
    const { count } = this.state;
    return count === 0 ? 'zero' : count;
  }
}
export default Counter;
