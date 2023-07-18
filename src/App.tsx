import React from "react";
import Calculator from "./components/Calculator";

const App: React.FC = () => {
  return (
    <div className=" bg-gradient-to-bl from-purple-500 to-red-500 w-full h-screen flex items-center justify-center">
      <Calculator />
    </div>
  );
};

export default App;
