import React from "react";
import { useNavigate } from "react-router-dom";

import MenuBackground from "../../images/menu_Background.jpg";

const Menu = ({ header, active, setActive }) => {
  const navigate = useNavigate();
  return (
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}
    >
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <img src={MenuBackground} className="menu_background" alt="error(" />
        <div className="menu__header">{header}</div>
        <ul className="menu__items">
          <li className="menuItem hoverLink">О Нас</li>
          {/* <li className="menuItem hoverLink">Филиалы</li> */}
          <li
            className="menuItem hoverLink"
            onClick={() => navigate("/pricelist")}
          >
            Прайс Лист
          </li>
          <li
            className="menuItem hoverLink"
            onClick={() => navigate("/schedules")}
          >
            Рассписание
          </li>
          <li className="menuItem hoverLink">Контакты</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
