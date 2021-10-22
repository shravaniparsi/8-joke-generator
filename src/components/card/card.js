import "./card.css";
import Button from "../button/button";
import { connect } from "react-redux";
const Card = props => {
  return (
    <div className="cardWrapper">
      <div className="centerCont">
        <div className="card" id="img">
          <h1 id="title" className="paralax">
            HA HA HA!!
          </h1>

          <p id="" className="paralax">
            {props.isLoading ? <div class="spinner"></div> : props.jokeText}
            {/* <div class="spinner"></div> */}
          </p>
          <h2 id="bottomMarg" className="paralax">
            <Button></Button>
          </h2>
        </div>
      </div>
      <div className="background" id="eee"></div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    jokeText: state.joke,
    isLoading: state.loading
  };
};

export default connect(mapStateToProps)(Card);
