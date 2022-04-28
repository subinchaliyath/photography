import Image from "next/image";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// style={{
//     margin: "3rem",
//     borderRadius: "0.5rem",
//     boxShadow: "0 0 1rem rgba(26, 26, 44, 0.2)",
//     overflow: "hidden",
//   }}

const Banner = () => {
  return (
    <div className="mx-2 my-6 lg:mx-12 rounded-lg overflow-hidden shadow-2xl">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div className="">
          <Image
            layout="responsive"
            src="https://images.unsplash.com/photo-1580824456624-90e7ebe08d4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            height={2}
            width={5}
          />
        </div>
        <div className="">
          <Image
            layout="responsive"
            src="https://images.unsplash.com/photo-1610173827002-62c0f1f05d04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            height={2}
            width={5}
          />
        </div>
        <div className="">
          <Image
            layout="responsive"
            src="https://images.unsplash.com/photo-1610173827002-62c0f1f05d04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            height={2}
            width={5}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
