import "./ProdutoB.css"

export default function Produto({produto, preco, inclui_item }) {
  let t_preco = parseFloat(preco)
  console.log(typeof(preco))
  return (
    <div className="pizza_tamanho" 
    onClick={()=> inclui_item( [produto, t_preco ] )}>
      <div className="produto_b">
        {console.log(produto, preco)}
        <p>{produto}</p>
      </div>
      <p className="preco">R$ {t_preco.toFixed(2)}</p>
    </div>
  );
}
