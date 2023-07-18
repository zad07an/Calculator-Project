import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import CalcProvider from "./context/CalcProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CalcProvider>
    <App />
  </CalcProvider>
);
