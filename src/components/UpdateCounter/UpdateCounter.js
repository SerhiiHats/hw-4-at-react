import {Component} from "react";
import "./UpdateCounter.css"

class UpdateCounter extends Component {
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
  }

  toggleFlag() {
    const {flag} = this.state;
    this.setState({flag: !flag});
    this.key = !flag;
  }

  render() {
    const {count} = this.state;
    return (
      <div onClick={()=>this.toggleFlag()} className={"UpdateCounter"}>
        <p>Click this div for update Counter</p>
        <div className={"Counter"}>{count}</div>
      </div>
    );
  }
}

export default UpdateCounter