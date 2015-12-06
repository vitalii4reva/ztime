import React, { Component } from 'react';

import styles from './styles/styles.css';

// function tick() {
//   let x = 0;
//   setInterval(function () {
//     x += 1;
//     console.log( x );
//   }, 1000);
//
//   return x;
// };
//
// export default class Timer extends Component {
//
//
//   render() {
//
//     // let tick =
//
//     var text = tick();
//
//     // console.log(tick());
//     // var text = 'textxtetxtxt';
//     return (
//     <div className = 'timer'>
//       Timer {text}
//    </div>
//     );
//   }
// }

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }
  tick() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <div onClick={this.tick.bind(this)}>
        Clicks: {this.state.count}
      </div>
    );
  }
}
Timer.propTypes = { initialCount: React.PropTypes.number };
Timer.defaultProps = { initialCount: 0 };
