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
  },
  {
    name: "birthday",
    path: "birthday-2",
    design: 2,
  },
  {
    name: "birthday",
    path: "birthday-3",
    design: 3,
  },
  {
    name: "anniversary",
    path: "anniversary-1",
    design: 1,
  },
  {
    name: "anniversary",
    path: "anniversary-2",
    design: 2,
  },
  {
    name: "anniversary",
    path: "anniversary-3",
    design: 3,
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
    let template_design = document
      .querySelector(".swiper-slide-active")
      .getAttribute("template-design");
    setTempInfo((prev) => {
      return {
        ...prev,
        name: template_name,
        path: template_path,
        design: template_design,
      };
    });
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
