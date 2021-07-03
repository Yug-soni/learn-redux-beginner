import { useSelector, useDispatch } from "react-redux";
import increment from "./actions/increment.action";
import decrement from "./actions/decrement.action";
import signIn from "./actions/sign-in.action";
import "./App.css";

function App() {
  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.login);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter :- {counter}</h1>
      <button onClick={() => dispatch(increment(10))}>+</button>
      <br />
      <button onClick={() => dispatch(decrement(10))}>-</button>
      <br />

      <h3>Is user Logged in :- {isLoggedIn === false ? "NO" : "YES"}</h3>
      <button onClick={() => dispatch(signIn())}>Login</button>
    </div>
  );
}

export default App;
