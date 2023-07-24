import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Cliente from "./components/Cliente/Cliente";
import { useState } from "react";

function App() {
  const [user_logged, setuser_logged] = useState("");
  const [show_cliente_container, set_show_cliente_container] = useState(false);

  return (
    <div className="App">
      <Header user = {user_logged}/>
      <Login
        user_logged={user_logged}
        setuser_logged={setuser_logged}
        set_show_cliente_container={set_show_cliente_container}
        show_cliente_container={show_cliente_container}
      />
      {show_cliente_container && <Cliente user_logged={user_logged} />}
    </div>
  );
}

export default App;
