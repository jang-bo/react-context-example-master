import React, { useContext } from "react";
import PersonContext from "../contexts/PersonContext";

export default function Example3() {
  const { persons, add } = useContext(PersonContext);

  return (
    <>
      <h1>useContext 사용</h1>
      <ul>
        {persons.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
      <button onClick={click}>추가</button>
    </>
  );

  function click() {
    add();
  }
}
