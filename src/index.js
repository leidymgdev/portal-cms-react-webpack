import ReactDOM from "react-dom";
import pkg from "../package.json";
import App from "./components/App";

console.log(
  `Nizza liveshopping v${pkg.dependencies["@jcgalvis/vtex.livestreaming"]}`
);
ReactDOM.render(<App />, document.getElementById("live-shopping-app"));
