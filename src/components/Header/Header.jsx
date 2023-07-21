import "./Header.css";
export default function Header() {
  return (
    <>
      <section className="header_container">
        <div className="header_content">
          <div className="logo">
            <p>logo aqui</p>
          </div>
          <div className="menu_container">
            <ul className="menu_content">
              <li>Cliente</li>
              <li>Pedidos</li>
              <li>Cozinha</li>
              <li>Delivery</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
