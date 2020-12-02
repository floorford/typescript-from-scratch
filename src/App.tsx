import React from "react";

const App = (): JSX.Element => {
  const sum = (a: number, b: number): number => a + b;

  return <h1>2 + 3 is: {sum(2, 3)}</h1>;
};

export default App;
