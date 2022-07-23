
import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
    return (
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cms-contents.pharmeasy.in/banner/61862f21513-DiagDweb.jpg?dim=1440x0&dpr=1&q=100"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cms-contents.pharmeasy.in/banner/4a92d1f76bf-Get_end_to_end.jpg?dim=1440x0&dpr=1&q=100"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cms-contents.pharmeasy.in/banner/c414a98e027-dwebjpg.jpg?dim=1440x0&dpr=1&q=100"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cms-contents.pharmeasy.in/banner/31e6940d27f-WP.jpg?dim=1440x0&dpr=1&q=100"
            alt="fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default CarouselFadeExample;