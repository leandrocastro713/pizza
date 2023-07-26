export default function Produto({produto, obs, preco, inclui_item }) {
  let t_preco = parseFloat(preco)
  console.log(typeof(preco))
  return (
    <div className="pizza_tamanho" 
    onClick={()=> inclui_item( [produto, t_preco ])}>
      <div className="pizza_desc">
        {console.log(produto, obs, preco)}
        <p>{produto}</p>
        <p className="obs">{obs}</p>
      </div>
      <p className="preco">R$ {t_preco.toFixed(2)}</p>
    </div>
  );
}
