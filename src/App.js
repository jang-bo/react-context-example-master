import { useState } from "react";
import "./App.css";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";

import { Provider } from "./contexts/PersonContext";

function App() {
  const [persons, setPersons] = useState([
    { id: 0, name: "Mark", age: 38 },
    { id: 1, name: "Hanna", age: 27 },
  ]);

  function add() {
    setPersons([...persons, { id: 2, name: "React", age: 10 }]);
  }

  return (
    <Provider value={{ persons, add }}>
      <div className="App">
        <header className="App-header">
          <Example1 />
          <Example2 />
          <Example3 />
        </header>
      </div>
    </Provider>
  );
}

export default App;
