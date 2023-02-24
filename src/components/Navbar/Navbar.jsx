import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../images/logo-topfit.png";
import MenuIcon from "../../images/menu_icon.png";
import CancelIcon from "../../images/cancel_Icon.png";
import Menu from "./menu";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <img
            src={Logo}
            onClick={() => navigate("/")}
            className="navLogo"
            alt="error("
          />
          <img
            src={menuActive ? CancelIcon : MenuIcon}
            onClick={() => setMenuActive(!menuActive)}
            className={menuActive ? "navMenuIcon down" : "navMenuIcon"}
            alt="error("
          />
          <ul className="navList">
            <li className="hoverLink">О Нас</li>
            {/* <li className="hoverLink">Филиалы</li> */}
            <li className="hoverLink" onClick={() => navigate("/pricelist")}>
              Прайс Лист
            </li>
            <li className="hoverLink" onClick={() => navigate("/schedules")}>
              Рассписание
            </li>
            <li className="hoverLink">Контакты</li>
          </ul>
        </div>
      </div>
      <Menu active={menuActive} setActive={setMenuActive} />
    </>
  );
};

export default Navbar;
