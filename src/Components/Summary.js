import React from "react";
import "../App.css";

function Summary(props) {
  console.log(props.globalState);
  //let = props.globalState.looseleaf
  // let looseleaf = props.globalState.countItem(props.globalState.cart, props.globalState.cart)

  return (
    <div className="summary">
      <ul>
        {props?.cart?.length ? null : <li>No items here yet.</li>}
        {props.globalState.cart.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default Summary;
