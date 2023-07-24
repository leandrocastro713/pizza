import "./Cliente.css";
import { useState } from "react";
// import React from "react";

export default function Cliente({ user_logged }) {
  const [total_pedido, set_total_pedido] = useState(0.0);
  const [show_itens, set_show_itens] = useState(false)
  const [itens_pedido, set_itens_pedido] = useState([])
  
  function inclui_item([item, valor]) {
    let x = total_pedido + 62;
    set_total_pedido(x);
    console.log(total_pedido);
    set_itens_pedido(arr => [...arr, {item, valor}])
    console.log(item, valor)
    console.log(itens_pedido)
    set_total_pedido()
  }

  function f_show_itens(){
    set_show_itens(!show_itens)
    console.log(show_itens)
  }

  return (
    <>
      <div className="cliente_container">
        
        <div className="itens_pedido" 
          style = {{opacity: show_itens ? .95 : 0 , left: show_itens ? '10vw' : '100vw'}}>
            <h2>Itens do pedido</h2>
            {itens_pedido.map((item)=>
              <div className="lista">
                <p>{item.item}</p>
                <p>{item.valor}</p>
                <p id="excluir">Ecluir</p>
              </div>)
            }
        </div>
      
        <h2>Olá, {user_logged} !</h2>

        <div className="pizzas_container">
          <h3>Pizzas</h3>

          <div className="pizzas_tabela">
            <div className="pizza_tamanho pizza_super_familia">
              <div className="pizza_desc">
                <p>Super Familia</p>
                <p className="obs">16 fatias 45cm</p>
              </div>
              <p className="preco">R$ 68,00</p>
            </div>

            <div
              className="pizza_tamanho pizza_familia"
              onClick={() => inclui_item(['Pizza Familia',62])}
            >
              <div className="pizza_desc">
                <p>Familia</p>
                <p className="obs">12 fatias 40cm</p>
              </div>
              <p className="preco">R$ 62,00</p>
            </div>

            <div className="pizza_tamanho pizza_grande">
              <div className="pizza_desc">
                <p>Grande</p>
                <p className="obs">8 fatias 35cm</p>
              </div>
              <p className="preco">R$ 55,00</p>
            </div>

            <div className="pizza_tamanho pizza_media">
              <div className="pizza_desc">
                <p>Media</p>
                <p className="obs">6 fatias 30cm</p>
              </div>
              <p className="preco">R$ 45,00</p>
            </div>

            <div className="pizza_tamanho pizza_pequena">
              <div className="pizza_desc">
                <p>Pequena</p>
                <p className="obs">4 fatias 25cm</p>
              </div>
              <p className="preco">R$ 35,90</p>
            </div>

            <div className="pizza_tamanho pizza_pequena">
              <div className="pizza_desc">
                <p>2 pizzas grande + refrigerante 2 litros</p>
                <p className="obs">8 fatias 35cm</p>
              </div>
              <p className="preco">R$ 90,00</p>
            </div>
          </div>
        </div>

        <footer className="footer" onClick={()=>f_show_itens()}>
          <div className="footer_content">
            <p className="footer_legenda">Total do pedido</p>
            <p className="footer_total">R$ 0.00</p>
          </div>
        </footer>
      </div>
    </>
  );
}
