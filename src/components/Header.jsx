import React from "react";
import Video from "../videos/headerVideo.mp4";

const Header = () => {
  return (
    <div className="header_container">
      <ul className="header_content">
        <li>
          МЫ — ПРОФЕССИОНАЛЫ
          <br />
          ‌Каждый тренер в нашей команде на постоянной основе посещает повышения
          квалификации и различные классы для тренеров.
        </li>
        <li>
          ИНДИВИДУАЛЬНЫЙ ПОДХОД
          <br />
          ‌Мы учитываем все особенности здоровья и уровень физической
          подготовки.
        </li>
        <li>
          ‌УДОБНОЕ РАСПОЛОЖЕНИЕ
          <br />
          ‌2 студии в самых удобных районах Бишкека. Всего в нескольких минутах
          от остановок, а так же паркинг.
        </li>
      </ul>
    </div>
  );
};

export default Header;
