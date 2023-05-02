import "./ObjectLike.css";
import { Component } from "react";
import like from "../../images/like_2.svg"
import unlike from "../../images/like_1.svg"

class ObjectLike extends Component {

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { visible } = this.props;
    const message = (visible) ? "Додано в улюблене❤💚💛💙" : "Вилучено з улюбленого✘💔✘";
    alert(message);
  }


  render() {
    const { visible, handlerLike } = this.props;
    return (
      <div className={"ObjectLike"}>
        <div onClick={() => handlerLike()} className={"Like"}>
          <img src={visible ? like : unlike} alt={"like"} />
        </div>
      </div>
    );
  }

}

export default ObjectLike;