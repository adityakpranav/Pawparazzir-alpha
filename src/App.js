import "./styles.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Login />
        </Route>
        {/* <Route path="/register"><Register/></Route>
        <Route path="/checkout"><Home/></Route>
        <Route path="/thanks"><Entry/></Route> */}
      </Switch>
    </div>
  );
}
