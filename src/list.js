import React from "react";
import "./styles.css";
export default function List() {
  console.log(window);
  const obj = { name: "tony", grade: { math: 33, English: 55 } };
  return (
    <div className="App">
      <ul>
        <li>aaaa</li>
        <li>bbbb</li>
        <li>cccc</li>
        <li>dddd</li>
        <li>ffff</li>
        <li>{_.get(obj, ["name"])}</li>
      </ul>
    </div>
  );
}
