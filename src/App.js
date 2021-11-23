import React, { Component } from "react";
import "./App.css";
import Hero from "./Components/Hero.js";
import Product from "./Components/Product.js";
import Summary from "./Components/Summary.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laptops: 0,
      pencils: 0,
      looseLeaf: 0,
      cart: []
    };
  }
  countItem = (array, item) => {
    let counter = 0;

    for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
        counter++;
      }
    }
    return counter;
  };

  purchase = (item) => {
    console.log(`I just bought ${item}`);
    console.log(this.state);
    this.state.cart.push(item);
  };

  // I think this is what I need, but think it needs to be in product which means product should be a class based component
  componentDidMount() {
    console.log("componentDidMount() lifecycle");
  }
  render() {
    return (
      <div className="App">
        <Hero />
        <Product type="Laptop" price="999.00" buyProduct={this.purchase} />
        <Product
          type="Mechanical Pencil"
          price="0.25"
          buyProduct={this.purchase}
        />
        <Product
          type="College Ruled Loose Leaf"
          price="2.75"
          buyProduct={this.purchase}
        />
        <Summary globalState={this.state} />
      </div>
    );
  }
}

export default App;
