import { useEffect, useState } from "react";
import Footer from "../homecomponents/footer/footer";
const Order = () => {
 const [name, setName] = useState([]);
 useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setName(data);
      });
  });

  return (
    <>
        <div className="med">
          {name.map((n) => {
            return (
              <>
                <div className="img-container">
                  <img src={n.imgurl} />
                  <h3>{n.title}</h3>
                </div>
              </>
            );
          })}
        </div>
    </>
  )
};

export default Order;