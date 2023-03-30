import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context";

const data = [
  {
    name: "birthday",
    path: "birthday-1",
    design: 1,
    pdf: {
      name: {
        x: 230,
        y: 355,
        size: 26,
      },
      img: {
        x: 128,
        y: 392,
        width: 226,
        height: 226,
      },
    },
  },
  {
    name: "birthday",
    path: "birthday-2",
    design: 2,
    pdf: {
      name: {
        x: 230,
        y: 335,
        size: 28,
      },
      img: {
        x: 109,
        y: 415,
        width: 263,
        height: 263,
      },
    },
  },
  {
    name: "birthday",
    path: "birthday-3",
    design: 3,
    pdf: {
      name: {
        x: 230,
        y: 355,
        size: 26,
      },
      img: {
        x: 128,
        y: 392,
        width: 226,
        height: 226,
      },
    },
  },
  {
    name: "anniversary",
    path: "anniversary-1",
    design: 1,
    pdf: {
      name: {
        x: 230,
        y: 335,
        size: 28,
      },
      img: {
        x: 128,
        y: 392,
        width: 226,
        height: 226,
      },
    },
  },
  {
    name: "anniversary",
    path: "anniversary-2",
    design: 2,
    pdf: {
      name: {
        x: 230,
        y: 335,
        size: 28,
      },
      img: {
        x: 109,
        y: 415,
        width: 263,
        height: 263,
      },
    },
  },
  {
    name: "anniversary",
    path: "anniversary-3",
    design: 3,
    pdf: {
      name: {
        x: 230,
        y: 335,
        size: 28,
      },
      img: {
        x: 128,
        y: 392,
        width: 226,
        height: 226,
      },
    },
  },
];

const Poster = () => {
  const navigate = useNavigate();
  const { setTempInfo } = useContext(AppContext);
  const { template } = useParams();
  const [templates, setTemplates] = useState(null);
  useEffect(() => {
    let checkEl = data.filter((item) => item.name === template);
    if (checkEl.length) {
      setTemplates(checkEl);
    } else {
      navigate("/");
    }
  }, [template]);

  const handleSubmit = () => {
    let template_name = document
      .querySelector(".swiper-slide-active")
      .getAttribute("template-name");
    let template_path = document
      .querySelector(".swiper-slide-active")
      .getAttribute("template-path");
    let findTemp = data.filter((item) => {
      return item.name === template_name && item.path == template_path;
    });
    setTempInfo(findTemp[0]);

    navigate("/doctor-information");
  };

  return (
    <div className="w-full relative h-full py-4 flex flex-col gap-4 px-6">
      <h4 className="text-xl font-bold text-center text-theme_pink-500">
        View Template
      </h4>
      <div className="px-4">
        <Swiper
          pagination={true}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper shadow-lg border border-slate-200"
        >
          {templates?.map((item, i) => {
            return (
              <SwiperSlide
                key={i}
                template-name={item.name}
                template-path={item.path}
                template-design={item.design}
              >
                <img
                  src={`../../${item.name}/${item.path}/thumb.png`}
                  alt="temp1"
                  className="w-full"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="swiper-button-prev prev swiperBtn"></div>
        <div className="swiper-button-next next swiperBtn"></div>
      </div>
      <button className="btn" onClick={handleSubmit}>
        Select Template
      </button>
    </div>
  );
};
export default Poster;
