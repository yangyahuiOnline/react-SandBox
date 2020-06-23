import React from "react";
import "./styles.css";
import _ from "lodash";
import List from "./list";

export default function App() {
  const a = 24;
  /**
   * 方式1:全局挂载lodash
   * 方式2：全局挂载在react对象上
   * 思考有没有更加优雅的全局挂载方式
   */
  window._ = _;
  console.log(window);
  const obj = { name: "tony", grade: { math: 33, English: 55 } };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {a === 22 ? <h1>选择1</h1> : <h1>选择2</h1>}
      {_.get(obj, ["grade", "math"])}
      <List />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
