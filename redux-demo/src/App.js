import React from "react";
import logo from "./logo.svg";
import "./App.css";
import store from "./store.js";
import { addToCart, updateCart, deleteFromCart } from "./actions/cart";
import Display from './Display'
class App extends React.Component {
    state = {
        cart: [],
    };

    handleAdd = () => {
        store.dispatch(addToCart("Coffee 500gm", 1, 250));
        // store.dispatch(addToCart("Flour 1kg", 2, 110));
        // store.dispatch(addToCart("Juice 2L", 1, 250));
    };

    handleDelete = () => {
        store.dispatch(deleteFromCart("Coffee 500gm"));
    };

    handleUpdate = () => {
        store.dispatch(updateCart("Coffee 500gm", 99, 9999));
    };

    render() {
        console.log("initial state: ", store.getState());

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Display></Display>
                    <button onClick={this.handleAdd}>加入购入车</button>
                    <button onClick={this.handleDelete}>删除</button>
                    <button onClick={this.handleUpdate}>更新</button>
                </header>
            </div>
        );
    }
}


export default App;