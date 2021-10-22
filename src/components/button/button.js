import { connect } from "react-redux";
import * as actionTypes from './../../store/actionTypes'
import './button.css'

const Button = (props) => {
  return (
    <div className="buttonWrapper">
     <button className="buttoni"
     onClick={()=>{
       props.setLoading(true);
       props.generateJoke()
      //  props.setLoading(false);
     }}>generate joke</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    generateJoke: () => dispatch(actionTypes.generate_joke_async()),
    setLoading: (val) => dispatch(actionTypes.set_loading(val)),
  };
};
export default connect(null, mapDispatchToProps)(Button);
