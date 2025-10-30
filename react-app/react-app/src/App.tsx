// App.tsx
import React from "react";
import ButtonWithAlert from "./ButtonWithAlert"; // make sure the path is correct

const App: React.FC = () => {
  return (
    <div>
      <h1>My React App</h1>
      <ButtonWithAlert />
    </div>
  );
};

export default App;
