import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Sarah T., Dubai",
    text: "Jyoga has completely transformed my lifestyle. The instructors are incredible, and I’ve never felt more balanced and focused in my life.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Ahmed R., Dubai",
    text: "The group classes are fun and engaging, and the personalized sessions are truly tailored to my needs. Highly recommend Jyoga to anyone looking to embrace yoga!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Priya S., Dubai",
    text: "I love the positive vibe Jyoga brings! The yoga events are so well-organized, and I feel rejuvenated every time I attend.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Jason M., Dubai",
    text: "Whether you’re new to yoga or experienced, Jyoga has something for everyone. Their guidance helped me advance my practice and feel healthier.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 my-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div 
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-dark bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-primary">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-primary/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
