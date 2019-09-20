import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";
import Footer from "./footer";
import store from "./store";

import "./styles.css";

@observer
class App extends React.Component {
  constructor(props) {
    super(props);
    this.input = null;
  }

  render() {
    return (
      <div className="App">
        {store.double}
        {/* 注意不是 store.double() */}
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!this.input.value.trim()) {
              return;
            }
            store.addTodo(this.input.value);
            this.input.value = "";
          }}
        >
          <input
            ref={node => {
              this.input = node;
            }}
          />
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {store.getVisibleTodos().map(item => {
            return (
              <li
                style={{
                  textDecoration: item.completed ? "line-through" : "none"
                }}
                key={item.id}
                onClick={() => {
                  store.toggleTodo(item.id);
                }}
              >
                {item.text}
              </li>
            );
          })}
        </ul>
        <Footer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
