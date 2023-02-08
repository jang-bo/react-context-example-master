import React from "react";
import { Consumer } from "../contexts/PersonContext";

// Consumer 를 사용하는 경우, class function 관계 없음
export default function Example1() {
  return (
    <>
      <h1>Consumer 사용</h1>
      <Consumer>
        {({ persons }) => (
          <ul>
            {persons.map((person) => (
              <li>{person.name}</li>
            ))}
          </ul>
        )}
      </Consumer>
    </>
  );
}
