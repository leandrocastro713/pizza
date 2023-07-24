import "./Login.css";
import { useEffect, useState, useRef } from "react";
import { CiRead } from "react-icons/ci";

export default function Login({ user_logged, setuser_logged, set_show_cliente_container }) {
  const [user, set_user] = useState("");
  const [pw_text, set_pw_text] = useState("");
  const [see_pw, set_see_pw] = useState(false);
  const [ci_color, set_ci_color] = useState("gray");
  const [btn_ok_enabled, setbtn_ok_enabled] = useState(false);

  const [show_login_container, set_show_login_container] = useState(true)
  
  const user_ref = useRef(null);
  
  useEffect(() => {
    if (user != "" && pw_text != "") {
      setbtn_ok_enabled(true);
    } else {
      setbtn_ok_enabled(false);
    }
    console.log(user);
    console.log(pw_text);
  }, [user, pw_text]);


  function handle_see_pw() {
    console.log(see_pw, ci_color);
    if (see_pw) {
      set_ci_color("gray");
      set_see_pw(false);
    } else {
      set_ci_color("green");
      set_see_pw(true);
    }
  }

  function handle_user(e) {
    set_user(e.target.value);
  }

  function handle_pw(e) {
    set_pw_text(e.target.value);
  }

  function handle_btn_click() {
    if (user == "" || pw_text == "") {
      alert("Os campos Usuário e Senha são obrigatórios");
      user_ref.current.select();
    } else {
      if (user === "admin" && pw_text === "123") {
        setuser_logged(user);
        set_show_login_container(false)
        set_show_cliente_container(true)
        console.log ('Bem vindo, usuário ' + user + '.')
      }
    }
  }

  return (
    <>
      {show_login_container && 

        <div className="login_container">

          <form className="login_content" action="">
            <h2>Login</h2>
            <div className="user">
              <p>Usuário:</p>
              <input
                ref={user_ref}
                onChange={(e) => handle_user(e)}
                type="text"
                name="user"
                id="user"
              />
            </div>

            <div className="pw">
              <p>Senha:</p>
              <input
                type="password"
                name="pw"
                id="pw"
                onChange={(e) => handle_pw(e)}
              />
              <CiRead
                className="CiRead"
                style={{ color: `${ci_color}` }}
                onClick={() => handle_see_pw()}
              />
              {see_pw ? <p className="min">{pw_text}</p> : <p> </p>}
            </div>

            <input
              style={{ opacity: btn_ok_enabled ? "1" : ".3" }}
              className="btn"
              type="button"
              value="OK"
              onClick={() => handle_btn_click()}
            />
          </form>

        </div>
      }
    </>
  );
}
