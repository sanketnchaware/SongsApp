import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
