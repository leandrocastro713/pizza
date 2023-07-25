import "./Header.css";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header({user}) {
  return (
    <>
      <section className="header_container">
        <div className="header_content">
          <div className="logo">
            <GiFullPizza className="gi_pizza"/>
            <p>Pizzaria do Papai</p> 
          </div>
          <div className="menu_container">
            <ul className="menu_content">
              <li>Cliente</li>
              <li>Pedidos</li>
              <li>Cozinha</li>
              <li>Delivery</li>
            </ul>
            <GiHamburgerMenu className='hamburguer_menu'/>
          </div>
        </div>
      </section>
    </>
  );
}
