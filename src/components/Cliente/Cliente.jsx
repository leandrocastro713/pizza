import "./Cliente.css";
import { useEffect, useState } from "react";
import { SlNote } from "react-icons/sl";// import React from "react";

export default function Cliente({ user_logged }) {
  const [total_pedido, set_total_pedido] = useState(0);
  const [show_itens, set_show_itens] = useState(false);
  const [itens_pedido, set_itens_pedido] = useState([]);

  function inclui_item([item, valor]) {
    console.log(total_pedido);
    set_itens_pedido((arr) => [...arr, { item, valor }]);
    console.log(item, valor);
    console.log(itens_pedido);
    set_total_pedido(total_pedido + valor);
  }

  function excluir_item(valor, index) {
    console.log(valor, index)
    itens_pedido.splice(index,1)
    set_total_pedido(total_pedido - valor)
    if(itens_pedido.length==0){set_show_itens(false)}
  }

  function f_show_itens() {
    set_show_itens(!show_itens);
    console.log(show_itens);
  }

  return (
    <>
      <div className="cliente_container">
        <div
          className="itens_pedido"
          style={{
            opacity: show_itens ? 0.95 : 0,
            left: show_itens ? window.screen.width>400 ? "10vw" : "5vw" : '100vw', 
            width: show_itens ? window.screen.width>400 ? "80vw" : "90vw" : '300px'
          }}
        >
          <h2>Itens do pedido</h2>
          {itens_pedido.map( (item , index ) => (
            <div className="lista">
              <p className="lista_desc">{item.item}</p>
              <p className="preco">{item.valor.toFixed(2)}</p>
              <p id="excluir" onClick={()=>excluir_item(item.valor, index)}>Ecluir</p>
            </div>
          ))}
        </div>

        <h2>Olá, {user_logged} !</h2>

        <div className="pizzas_container">
          <h3>Pizzas</h3>

          <div className="pizzas_tabela">
            <div
              className="pizza_tamanho pizza_super_familia"
              onClick={() => inclui_item(["Pizza Super Familia", 68.0])}
            >
              <div className="pizza_desc">
                <p>Super Familia</p>
                <p className="obs">16 fatias 45cm</p>
              </div>
              <p className="preco">R$ 68,00</p>
            </div>

            <div
              className="pizza_tamanho pizza_familia"
              onClick={() => inclui_item(["Pizza Familia", 62.0])}
            >
              <div className="pizza_desc">
                <p>Familia</p>
                <p className="obs">12 fatias 40cm</p>
              </div>
              <p className="preco">R$ 62,00</p>
            </div>

            <div
              className="pizza_tamanho pizza_grande"
              onClick={() => inclui_item(["Pizza Grande", 55.0])}
            >
              <div className="pizza_desc">
                <p>Grande</p>
                <p className="obs">8 fatias 35cm</p>
              </div>
              <p className="preco">R$ 55,00</p>
            </div>

            <div
              className="pizza_tamanho pizza_media"
              onClick={() => inclui_item(["Pizza Média", 45.8])}
            >
              <div className="pizza_desc">
                <p>Media</p>
                <p className="obs">6 fatias 30cm</p>
              </div>
              <p className="preco">R$ 45,80</p>
            </div>

            <div
              className="pizza_tamanho pizza_pequena"
              onClick={() => inclui_item(["Pizza Pequena", 35.9])}
            >
              <div className="pizza_desc">
                <p>Pequena</p>
                <p className="obs">4 fatias 25cm</p>
              </div>
              <p className="preco">R$ 35,90</p>
            </div>

            <div
              className="pizza_tamanho pizza_combo"
              onClick={() => inclui_item(['2 pizzas grande + refrigerange 2 litros', 90.0])}
            >
              <div className="pizza_desc">
                <p className="item_desc">2 pizzas grande + refrigerante 2 litros</p>
                <p className="obs">8 fatias 35cm</p>
              </div>
              <p className="preco">R$ 90,00</p>
            </div>
          </div>
        </div>

        <footer className="footer" onClick={() => f_show_itens()}>
          <div className="footer_content">
            <p className="footer_legenda">Total do pedido</p>
            <p className="footer_total">{(total_pedido.toFixed(2))}</p>
            <SlNote 
              style={{color: itens_pedido.length>0?'white':'gray' , 
                      animation: itens_pedido.length>0?'blink 3000ms infinite':'none'}} 
              className="note_icon" 
            />
          </div>
        </footer>
      </div>
    </>
  );
}
