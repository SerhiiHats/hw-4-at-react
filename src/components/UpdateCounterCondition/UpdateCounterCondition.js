import { Component } from "react";
import "./UpdateCounterCondition.css";


class UpdateCounterCondition extends Component {
    key = false;
    stopCounter = 3;
    state = {
        count: 0,
        flag: false,
    }

    shouldComponentUpdate() {
        if (this.state.count === this.stopCounter) {
            return false;
        }
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.key) {
            const { count } = this.state;
            this.setState({
                count: count + 1,
            })
            this.key = false;
        }
    }

    toggleFlag() {
        const { flag } = this.state;
        this.setState({ flag: !flag });
        this.key = true;
    }

    render() {
        const { count } = this.state;
        return (
            <div onClick={() => this.toggleFlag()} className={"UpdateCounter"}>
                <p>Click this div for update Counter to "3" with shouldComponentUpdate()</p>
                <div className={"Counter"}>{count}</div>
            </div>
        );
    }
}

export default UpdateCounterCondition;
