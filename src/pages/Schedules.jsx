import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Schedules = () => {
  return (
    <>
      <Navbar />
      <div className="schedules">
        <div className="schedules_container">
          <h2 className="schedule_title1">
            РАСПИСАНИЕ <br /> ‌филиал: Горького 108
          </h2>
          <table>
            <thead>
              <tr>
                <th>Время:</th>
                <th>Направление:</th>
                <th>Тренер:</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                {" "}
                <td></td>
                <td className="schedule_days">Пн / Ср / Пт</td>
                <td></td>
              </tr>
              <tr>
                <td>07:00</td>
                <td>hot stretching + МФР</td>
                <td>топ тренер Перизат</td>
              </tr>
              <tr>
                <td>07:00</td>
                <td>hot stretching</td>
                <td>юниор Каныкей (2000с)</td>
              </tr>
              <tr>
                <td>08:00</td>
                <td>hot stretching + МФР</td>
                <td>топ тренер Перизат</td>
              </tr>
              <tr>
                <td>08:00</td>
                <td>hot stretching</td>
                <td>Адэлина </td>
              </tr>
              <tr>
                <td>09:00</td>
                <td>hot stretching</td>
                <td>Адэлина </td>
              </tr>
              <tr>
                <td>10:00</td>
                <td>hot stretching + МФР</td>
                <td>Шоола</td>
              </tr>
              <tr>
                <td>10:00</td>
                <td>stretching</td>
                <td>юниор Жибек</td>
              </tr>
              <tr>
                <td>11:00</td>
                <td>upper body </td>
                <td>юниор Жибек (2000с) </td>
              </tr>
              <tr>
                <td>12:00/13:00(пт)</td>
                <td>hot stretching</td>
                <td>топ тренер Шоола </td>
              </tr>
              <tr>
                <td>15:00</td>
                <td>ABS</td>
                <td>Малика</td>
              </tr>
              <tr>
                <td>15:00</td>
                <td>hot stretching</td>
                <td>Милана </td>
              </tr>
              <tr>
                <td>16:00</td>
                <td>stretching + МФР</td>
                <td>юниор Адэлина</td>
              </tr>
              <tr>
                <td>16:00</td>
                <td>hot stretching</td>
                <td>Малика</td>
              </tr>
              <tr>
                <td>17:00</td>
                <td>stretching</td>
                <td>юниор Каныкей</td>
              </tr>
              <tr>
                <td>17:00</td>
                <td> hot stretching</td>
                <td>Эльнура</td>
              </tr>
              <tr>
                <td>18:00</td>
                <td>stretching+dance</td>
                <td>Эльнура </td>
              </tr>
              <tr>
                <td>18:00</td>
                <td>ABS </td>
                <td>юниор Жибек (2000с) </td>
              </tr>
              <tr>
                <td>19:00</td>
                <td> hot stretching</td>
                <td> Адэлина </td>
              </tr>
              <tr>
                <td>19:00</td>
                <td> hot stretching</td>
                <td> Айганыш </td>
              </tr>
              <tr>
                <td>20:00</td>
                <td> hot stretching</td>
                <td>Перизат </td>
              </tr>
              <tr>
                <td>20:00</td>
                <td>hot stretching + МФР</td>
                <td>Адэлина </td>
              </tr>

              <tr>
                {" "}
                <td></td>
                <td className="schedule_days"> Вт / Чт / Сб</td>
                <td></td>
              </tr>

              <tr>
                <td>‌15:00</td>
                <td>stretching</td>
                <td>Айганыш </td>
              </tr>
              <tr>
                <td>‌16:30</td>
                <td>детская хореография</td>
                <td>Айганыш </td>
              </tr>
              <tr>
                <td>18:00 </td>
                <td>hot stretching + МФР</td>
                <td>Камила </td>
              </tr>
              <tr>
                <td>19:00 </td>
                <td>hot stretching</td>
                <td>Камила </td>
              </tr>
              <tr>
                <td>19:00 </td>
                <td>stretching</td>
                <td>Рабия </td>
              </tr>
              <tr>
                <td>20:00 </td>
                <td>hot stretching + МФР</td>
                <td>Айганыш </td>
              </tr>
              <tr>
                <td>20:00 </td>
                <td>hot stretching</td>
                <td>Рабия </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="schedules_container">
          <h2 className="schedule_title1">
            РАСПИСАНИЕ <br /> ‌филиал: Малдыбаева 54а
          </h2>
          <table>
            <thead>
              <tr>
                <th>Время:</th>
                <th>Направление:</th>
                <th>Тренер:</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                {" "}
                <td></td>
                <td className="schedule_days">Пн / Ср / Пт</td>
                <td></td>
              </tr>
              <tr>
                <td>07:00</td>
                <td>йогатерапия женское здоровье</td>
                <td>Елена (старт 27 февраля)</td>
              </tr>
              <tr>
                <td>07:00</td>
                <td>hot stretching</td>
                <td>Милана </td>
              </tr>
              <tr>
                <td>08:00</td>
                <td>йогатерапия женское здоровье</td>
                <td>Елена (старт 27 февраля)</td>
              </tr>
              <tr>
                <td>08:00</td>
                <td>hot stretching</td>
                <td>Милана </td>
              </tr>
              <tr>
                <td>09:00</td>
                <td>fly yoga</td>
                <td>Айжан </td>
              </tr>
              <tr>
                <td>09:00</td>
                <td> hot stretching</td>
                <td>Рабия (старт 1 марта)</td>
              </tr>
              <tr>
                <td>10:00</td>
                <td>fly yoga 50+</td>
                <td>Шоола</td>
              </tr>
              <tr>
                <td>‌15:00 </td>
                <td>fly stretch + мфр </td>
                <td>Жибек</td>
              </tr>
              <tr>
                <td>‌16:00 </td>
                <td>fly stretch + мфр </td>
                <td>Жибек</td>
              </tr>
              <tr>
                <td>‌16:00 </td>
                <td>full body +мфр </td>
                <td>Шоола (старт 1 марта)</td>
              </tr>
              <tr>
                <td>‌17:00</td>
                <td>stretching </td>
                <td>Рабия </td>
              </tr>
              <tr>
                <td>‌17:00</td>
                <td>hot stretching + мфр</td>
                <td>Перизат </td>
              </tr>
              <tr>
                <td>18:00</td>
                <td>stretching</td>
                <td>Рабия</td>
              </tr>
              <tr>
                <td>18:00</td>
                <td>hot stretching + мфр</td>
                <td>Перизат</td>
              </tr>
              <tr>
                <td>‌19:00</td>
                <td>hot stretching + мфр</td>
                <td>Шоола </td>
              </tr>
              <tr>
                <td>‌19:00</td>
                <td>hot stretching</td>
                <td>Малика </td>
              </tr>

              <tr>
                {" "}
                <td></td>
                <td className="schedule_days"> Вт / Чт / Сб</td>
                <td></td>
              </tr>

              <tr>
                <td>‌16:00</td>
                <td>stretching</td>
                <td>Милана </td>
              </tr>
              <tr>
                <td>‌17:00</td>
                <td>stretching</td>
                <td>Милана </td>
              </tr>
              <tr>
                <td>‌17:00</td>
                <td>fly mix</td>
                <td>Айжан </td>
              </tr>
              <tr>
                <td>‌19:00</td>
                <td>fly mix</td>
                <td>Айжан </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Schedules;
