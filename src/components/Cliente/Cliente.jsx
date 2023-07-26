import "./Cliente.css";
import { useEffect, useState } from "react";
import { SlNote } from "react-icons/sl"; // import React from "react";
import Produto from "./Produtos/Produtos";
import ProdutoB from "./Produtos/ProdutoB";

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
    console.log(valor, index);
    itens_pedido.splice(index, 1);
    set_total_pedido(total_pedido - valor);
    if (itens_pedido.length == 0) {
      set_show_itens(false);
    }
  }

  function f_show_itens() {
    set_show_itens(!show_itens);
    console.log(show_itens);
  }

  return (
    <>
      <div className="cliente_container">
        {/* ------------- ITENS DE PEDIDO ---------------  */}

        <div
          className="itens_pedido"
          style={{
            opacity: show_itens ? 0.95 : 0,
            left: show_itens
              ? window.screen.width > 400
                ? "10vw"
                : "5vw"
              : "5vw",
            height: show_itens
              ? window.screen.width > 400
                ? "600px"
                : "400px"
              : "0px",
          }}
        >
          <h2>Itens do pedido</h2>
          {itens_pedido.map((item, index) => (
            <div className="lista">
              <p className="lista_desc">{item.item}</p>
              <p className="preco">{item.valor.toFixed(2)}</p>
              <p id="excluir" onClick={() => excluir_item(item.valor, index)}>
                Ecluir
              </p>
            </div>
          ))}
        </div>

        <h2>Olá, {user_logged} !</h2>

        <div className="pizzas_container">
          <h3>Pizzas</h3>

          {/* -----------------   SALGADAS ---------------*/}
          <div className="pizzas_tabela">
            <Produto
              produto="Pizza super familia"
              obs="16 fatias 45cm"
              preco="68"
              inclui_item={inclui_item}
            />
            <Produto
              produto="Pizza familia"
              obs="12 fatias 40cm"
              preco="62"
              inclui_item={inclui_item}
            />
            <Produto
              produto="Pizza grande"
              obs="8 fatias 35cm"
              preco="55"
              inclui_item={inclui_item}
            />
            <Produto
              produto="Pizza media"
              obs="6 fatias 30cm"
              preco="45.8"
              inclui_item={inclui_item}
            />
            <Produto
              produto="Pizza pequena"
              obs="4 fatias 25cm"
              preco="35.9"
              inclui_item={inclui_item}
            />
            <Produto
              produto="2 pizza grande + refri 2 litros"
              obs="8 fatias 35cm"
              preco="90"
              inclui_item={inclui_item}
            />
          </div>
        </div>

        <br />
        {/* -----------------   DOCES ---------------*/}
        <div className="pizzas_container">
          <h3>Pizzas doces</h3>

          <div className="pizzas_tabela">
            <Produto
              produto="Doce super familia"
              obs="16 fatias 45cm"
              preco="68"
              inclui_item={inclui_item}
            />
            <Produto
              produto="Doce familia"
              obs="12 fatias 40cm"
              preco="62"
              inclui_item={inclui_item}
            />
            <Produto
              produto="Doce grande"
              obs="8 fatias 35cm"
              preco="55"
              inclui_item={inclui_item}
            />
            <Produto
              produto="Doce média"
              obs="6 fatias 30cm"
              preco="45"
              inclui_item={inclui_item}
            />
            <Produto
              produto="Doce pequena"
              obs="3 fatias 25cm"
              preco="35"
              inclui_item={inclui_item}
            />
          </div>
        </div>

        {/* -----------------   BEBIDAS ---------------*/}
        <div className="pizzas_container">
          <h3>Bebidas</h3>

          <div className="pizzas_tabela">
            <ProdutoB
              produto="Schweppes citrus 1,5 litros"
              preco="17"
              inclui_item={inclui_item}
            />
            <ProdutoB
              produto="Energético burn 1 litro"
              preco="12"
              inclui_item={inclui_item}
            />
          </div>
        </div>

        {/* ----------------- REFRIS ---------------*/}
        <div className="pizzas_container">
          <h3>Refrigerantes</h3>

          <div className="pizzas_tabela">
            <ProdutoB
              produto="Fanta 2 litros"
              preco="7"
              inclui_item={inclui_item}
            />
            <ProdutoB
              produto="Coca-cola 3 litros"
              preco="16"
              inclui_item={inclui_item}
            />
            <ProdutoB
              produto="Coca-cola 2 litros"
              preco="9"
              inclui_item={inclui_item}
            />
            <ProdutoB
              produto="Coca-cola 1,5 litros"
              preco="7"
              inclui_item={inclui_item}
            />
            <ProdutoB
              produto="Sprite 2 litros"
              preco="10"
              inclui_item={inclui_item}
            />
            <ProdutoB
              produto="Sprite 600ml"
              preco="6"
              inclui_item={inclui_item}
            />
            <ProdutoB
              produto="Fanta 600ml"
              preco="6"
              inclui_item={inclui_item}
            />
          </div>
        </div>

        {/* ---------------------   FOOTER  ------------------ */}
        <footer className="footer" onClick={() => f_show_itens()}>
          <div className="footer_content">
            <p
              className="footer_legenda"
              style={{ color: itens_pedido.length > 0 ? "silver" : "black" }}
            >
              Total do pedido
            </p>
            <p
              className="footer_total"
              style={{ color: itens_pedido.length > 0 ? "silver" : "black" }}
            >
              {total_pedido.toFixed(2)}
            </p>
            <SlNote
              style={{
                color: itens_pedido.length > 0 ? "white" : "gray",
                animation:
                  itens_pedido.length > 0 ? "blink 3000ms infinite" : "none",
              }}
              className="note_icon"
            />
          </div>
        </footer>
      </div>
    </>
  );
}
