import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const PriceList = () => {
  return (
    <>
      <Navbar />
      <div className="priceList">
        <div class="priceList_container">
          <h2 className="priceList_title1">
            ПРАЙС ЛИСТ <br />
            ‌12 занятий / 1 месяц <br />
            <br />
            Филиал: на Горького 108
          </h2>
          <table>
            <tbody>
              <tr>
                <td>Утренний абонемент </td>
                <td>2 500 с</td>
              </tr>
              <tr>
                <td>Дневной абонемент </td>
                <td>2 500 с</td>
              </tr>
              <tr>
                <td>Вечерний абонемент </td>
                <td>3 500 с</td>
              </tr>
              <tr>
                <td>Безлимитный абонемент </td>
                <td>3 300 с</td>
              </tr>
              <tr>
                <td>Абонемент к тренеру-юниору </td>
                <td>2 000 с</td>
              </tr>
              <tr>
                <td>Пробное/разовое посещение</td>
                <td>400 с</td>
              </tr>
            </tbody>
          </table>

          <h2 className="schedule_title1">Филиал: Малдыбаева 54а</h2>
          <table>
            <tbody>
              <tr>
                <td>Утренний абонемент </td>
                <td>4 500 с</td>
              </tr>
              <tr>
                <td>Дневной абонемент </td>
                <td>4 000 с</td>
              </tr>
              <tr>
                <td>Вечерний абонемент </td>
                <td>4 500 с</td>
              </tr>
              <tr>
                <td>Безлимитный абонемент </td>
                <td>5 000 с</td>
              </tr>
              <tr>
                <td>Пробное/разовое посещение</td>
                <td>500 с</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PriceList;
