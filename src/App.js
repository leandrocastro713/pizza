import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import { useState } from 'react'

function App() {
  
  const [user_logged, setuser_logged] = useState('')
  const [show_client_container, set_show_client_container] = useState(false)
  
  return (

    <div className="App">
      <Header />
      <Login user_logged={user_logged} setuser_logged={setuser_logged} set_show_client_container={set_show_client_container}/>
      
    </div>
  
  );
}

export default App;
