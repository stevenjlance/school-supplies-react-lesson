import React from "react";
import "../App.css";

function Summary(props) {
  console.log(props.globalState);
  //let = props.globalState.looseleaf
  // let looseleaf = props.globalState.countItem(props.globalState.cart, props.globalState.cart)

  return (
    <div className="summary">
      {props.globalState.cart.map((item) => {
        return <li>{item}</li>;
      })}
    </div>
  );
}

export default Summary;
