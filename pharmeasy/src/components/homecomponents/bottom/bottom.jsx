import "../bottom/bottom.scss";
const Bottom = () => {
  const ProductData = [
    {
      title: "Medicine",
      bt: "Order Now",
      imgurl:
        "https://assets.pharmeasy.in/web-assets/dist/7c645a8d.png?dim=186x0&dpr=1&q=100",
    },
    {
      title: "Health care",
      bt: "Order Now",
      imgurl:
        "https://assets.pharmeasy.in/web-assets/dist/c7c7095b.png?dim=186x0&dpr=1&q=100",
    },
    {
      title: "Labtest",
      bt: "Book Now",
      imgurl:
        "https://assets.pharmeasy.in/web-assets/dist/e1d3ac1c.png?dim=186x0&dpr=1&q=100",
    },
  ];
  const offersData = [
    {
      imgurl:
        "https://cms-contents.pharmeasy.in/offer/9504ed92881-flat22offer.jpg?dim=60x0&dpr=1&q=100",
      offer: "Flat 22% off",
    },
    {
      imgurl:
        "https://cms-contents.pharmeasy.in/offer/37c262d84a5-25.jpg?dim=60x0&dpr=1&q=100",
      offer: "Flat 25% off",
    },
    {
      imgurl:
        "https://cms-contents.pharmeasy.in/offer/2846076d5d2-Diagnostics-10-min.png?dim=60x0&dpr=1&q=100",
      offer: "Flat 4OO off",
    },
    {
      imgurl:
        "https://cms-contents.pharmeasy.in/offer/40ef59a3196-Diagnostics-11-min.png?dim=60x0&dpr=1&q=100",
      offer: "exclusive Couple offer",
    },
  ];
  const brands = [
    {
      imgurl:
        "https://cms-contents.pharmeasy.in/carousel_item/1f27723d1f3-Glucon-D.jpg?dim=146x0&dpr=1&q=100",
      title: "Glucon-D",
    },
    {
      imgurl:
        "https://cms-contents.pharmeasy.in/carousel_item/7326ee948ff-web_Himalaya.jpg?dim=146x0&dpr=1&q=100",
    },
    {
      imgurl:
        "https://cms-contents.pharmeasy.in/carousel_item/d5f9240e29a-SUGARFREE.png?dim=146x0&dpr=1&q=100",
    },
    {
      imgurl:
        "https://cms-contents.pharmeasy.in/carousel_item/c572570b5ce-Liveasy.jpg?dim=146x0&dpr=1&q=100",
    },
    {
      imgurl:
        "https://cms-contents.pharmeasy.in/carousel_item/c72feb4bd7a-web_Huggies.jpg?dim=146x0&dpr=1&q=100",
    },
    {
      imgurl:
        "https://cms-contents.pharmeasy.in/carousel_item/2d987111a15-Featured-banner_Revital.png?dim=146x0&dpr=1&q=100",
    },
    {
      imgurl:
        "https://cms-contents.pharmeasy.in/carousel_item/729f07d6c49-04.jpg?dim=146x0&dpr=1&q=100",
    },
    {
      imgurl:
        "https://cms-contents.pharmeasy.in/carousel_item/ac01791d842-Featured-banner_Volini.png?dim=146x0&dpr=1&q=100",
    },
  ];
  return (
    <>
      <div className="outer-main">
        <div className="main-body">
          {ProductData.map((n) => {
            return (
              <>
                <div className="img-container">
                  <div className="title">
                    <h1>{n.title}</h1>
                  </div>
                  <button className="btn">{n.bt}</button>
                  <img src={n.imgurl} />
                </div>
              </>
            );
          })}
        </div>
        <div className="offers-container">
          <div className="offer">
            <img src="https://assets.pharmeasy.in/web-assets/dist/67890676.svg" />
            <h2>offers for you</h2>
          </div>
          <div className="alloffer">
            <h2>see All offers</h2>
          </div>
        </div>
        <div className="offers-con">
          {offersData.map((n) => {
            return (
              <>
                <div className="img-container">
                  <img src={n.imgurl} />
                  <h3>{n.offer}</h3>
                </div>
              </>
            );
          })}
        </div>
        <div className="offers-container">
          <div className="offer">
            <h2>Features Brand</h2>
          </div>
          <div className="alloffer">
            <h2>see All Brands</h2>
          </div>
        </div>
        <div className="offers-con">
          {brands.map((n) => {
            return (
              <>
                <div className="img-container">
                  <img src={n.imgurl} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Bottom;
