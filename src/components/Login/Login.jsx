import "./Login.css"
import { useCallback, useState } from 'react'
import { CiRead } from "react-icons/ci";

export default function Login() {
  const[pw_text, setPw_text] = useState('')
  const[see_pw, set_see_pw] = useState(false)
  const[ci_color, set_ci_color] = useState('gray')

  function handle_pw(e){
    setPw_text(e.target.value)
  }
  function handle_see_pw(){
    
    console.log(see_pw, ci_color)
    if(see_pw){
      set_ci_color('gray')
      set_see_pw(false)
    } else {
      set_ci_color('green')
      set_see_pw(true)
    }
  }
  return (
    <>
      <div className="login_container">
        <form className="login_content" action="">
          <h2>Login</h2>
          <div className="user">
            <p>Usuário:</p>
            <input type="text" name="user" id="user" />
            </div>
          <div className="pw">
            <p>Senha:</p>
            <input type="password" name="pw" id="pw" onChange={(e)=>handle_pw(e)}/>
              <CiRead className="CiRead" 
                style={{color: `${ci_color}`}} 
                onClick={()=>handle_see_pw()}
              />
            { see_pw ? <p className="min">{pw_text}</p> : <p>. </p> }
          </div>
          <input className="btn" type="button" value="OK" />
        </form>
      </div>
    </>
  );
}
