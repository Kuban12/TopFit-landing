import { useEffect, useState } from "react";
import IMG1 from "./assets/images/img_1.jpg";
import IMG2 from "./assets/images/img_2.jpg";
import IMG3 from "./assets/images/img_3.jpg";
import IMG4 from "./assets/images/img_4.jpg";

function Stuff() {
  const [index, setIndex] = useState(0);

  const mod = (n, m) => {
    let result = n % m;

    return result >= 0 ? result : result + m;
  };

  const cards = [
    {
      id: "1",
      image: IMG1,
      name: "Байсаева Шоола",
    },
    {
      id: "2",
      image: IMG2,
      name: "Нурбекова Рабия",
    },
    {
      id: "3",
      image: IMG3,
      name: "Ахмеджанова Камила",
    },
    {
      id: "4",
      image: IMG4,
      name: "Ускова Милана",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % cards.length);
      // console.log(index);
    }, 3000);
  }, [index]);

  return (
    <div className="stuff">
      <h2 className="stuff_title">Тренера</h2>
      <div className="carousel">
        {cards.map((item, i) => {
          const indexLeft = mod(index - 1, cards.length);
          const indexRight = mod(index + 1, cards.length);

          let className = "card";

          if (i === index) {
            className = "card card--active";
          } else if (i === indexRight) {
            className = "card card--right";
          } else if (i === indexLeft) {
            className = "card card--left";
          } else className = "card";

          return (
            <>
              <div key={item.id} className={className}>
                <p className="stuff_name">{item.name}</p>
                <img src={item.image} className="stuff_image" alt="image" />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Stuff;
