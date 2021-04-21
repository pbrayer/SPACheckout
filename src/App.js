import './App.css';
import React, { Component} from 'react';
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  constructor(props){
    super(props)

  this.state = {
    products: ["prod1", "prod2"],
    total: 0,
  };

  this.handleTrashClick = this.handleTrashClick.bind(this);
  this.handleCartUpdate = this.handleCartUpdate.bind(this);
}

  handleTrashClick (name) {
    let amount = document.getElementById(name + "quantity").value * -25;

    //Amount owed cannot be less than 0, we're not gonna pay them :)
    if(amount < 0){
      amount = 0
    }

    this.setState((currentState) => {
      return{
          products: currentState.products.filter((product) => product !== name),
          total: currentState.total = amount
      }
    }
    )
  }

  handleCartUpdate(){
    let total = 0;
    let test1 = document.getElementsByClassName("productinput")

    for(let i = 0; i < test1.length; i++){
     total+= Number(test1[i].value)
    }

    let amount = total * 25;


    this.setState((currentState) => {
      return{
          total: currentState.total = amount
      }
    }
    )

  }

  
  render() {return (
    <Router>
      <Switch>
      <Route exact path="/">
    <div className="App">
        <ShoppingCart products = {this.state.products} total = {this.state.total} handleCartUpdate = {this.handleCartUpdate} handleTrashClick = {this.handleTrashClick}  />
    </div>
    </Route>
    <Route path = "/checkout">
      <div className = "App">
       <Checkout total = {this.state.total} />
      </div>
    </Route>
    </Switch>
    </Router>
  );
}
};

export default App;
