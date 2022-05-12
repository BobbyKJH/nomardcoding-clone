import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CoinTracker from "./components/CoinTracker";
import Todo from "./components/Todo";
import FocusMovie from "./routers/FocusMovie";
import Home from "./routers/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <FocusMovie />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
