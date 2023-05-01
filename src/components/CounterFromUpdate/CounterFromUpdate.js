import {Component} from "react";
import "./CounterFromUpdate.css"

class CounterFromUpdate extends Component {
  key = true;
  state = {
    count: 0,
    flag: false,
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {count, flag} = this.state;
    if (this.key === flag) {
      this.setState({
        count: count + 1,
      })
    }
    this.key = !flag;
    console.log("componentDidUpdate")
  }

  hanlerFlag() {
    const {flag} = this.state;
    this.setState({flag: !flag});
    this.key = !flag;
  }

  render() {
    const {count} = this.state;
    return (
      <div onClick={() => this.hanlerFlag()} className={"CounterFromUpdate"}>
        <p>Click this div for update Counter</p>
        <div className={"Counter"}>{count}</div>
      </div>
    );
  }
}

export default CounterFromUpdate