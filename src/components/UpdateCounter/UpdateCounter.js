import {Component} from "react";
import "./UpdateCounter.css"

class UpdateCounter extends Component {
  key = false;
  state = {
    count: 0,
    flag: false,
  }

  componentDidUpdate(prevProps, prevState, snapshot) {    
    if (this.key) {
      const {count} = this.state;
      this.setState({
        count: count + 1,
      })
       this.key = false;
    }   
  }

  toggleFlag() {
    const {flag} = this.state;
    this.setState({flag: !flag});
    this.key = true;
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