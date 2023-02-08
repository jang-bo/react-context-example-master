import React from "react";
import PersonContext from "../contexts/PersonContext";

class Example2 extends React.Component {
  render() {
    const { persons } = this.context;
    return (
      <>
        <h1>this.context 사용</h1>
        <ul>
          {persons.map((person) => (
            <li>{person.name}</li>
          ))}
        </ul>
      </>
    );
  }

  // static contextType = PersonContext;
}

Example2.contextType = PersonContext;
// => 이렇게 쓰면 function 에서도 쓸 수 있다.

export default Example2;
