import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Business1 = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <div id="business1">
      <div className="container">
        <h3 className="business1-title">
          <img src="img/mainbg/Node3-icon@2x.png" alt="icon" />
          {props.data ? props.data.title1 : "loading..."}
        </h3>
        <div className="carousel-container-box">
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            infinite={true}
            transitionDuration={300}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item-padding-40-px">
            <div className="carousel-div"><img src="img/bg1/picture1@2x.png" width="300px" alt="slider-img" /></div>
            <div className="carousel-div"><img src="img/bg1/picture2@2x.png" width="300px" alt="slider-img" /></div>
            <div className="carousel-div"><img src="img/bg1/picture3@2x.png" width="300px" alt="slider-img" /></div>
            <div className="carousel-div"><img src="img/bg1/picture5@2x.png" width="300px" alt="slider-img" /></div>
            <div className="carousel-div"><img src="img/bg1/picture1@2x.png" width="300px" alt="slider-img" /></div>
            <div className="carousel-div"><img src="img/bg1/picture2@2x.png" width="300px" alt="slider-img" /></div>
            <div className="carousel-div"><img src="img/bg1/picture3@2x.png" width="300px" alt="slider-img" /></div>
            <div className="carousel-div"><img src="img/bg1/picture5@2x.png" width="300px" alt="slider-img" /></div>
          </Carousel>
        </div>
        <div className="business1-content-box">
          <p className="business1-paragraph">
            {props.data ? props.data.paragraph1 : "loading..."}
          </p>
          <h3 className="business1-small-title">
            {props.data ? props.data.title2 : "loading..."}
          </h3>
          <p className="business1-paragraph">
            {props.data ? props.data.paragraph2 : "loading..."}
          </p>
          <p className="business1-paragraph">
            {props.data ? props.data.paragraph3 : "loading..."}
          </p>
        </div>
      </div>
    </div>
  );
};
