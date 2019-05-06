import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import reducer from "./reducers/Reducer";
import { createStore } from 'redux';

const initialState = { tech: "React " };
const store = createStore(reducer, initialState);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return <HelloWorld tech={this.state.tech} />;
  }
}

export default App;
