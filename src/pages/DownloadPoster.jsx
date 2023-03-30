import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context";
import html2canvas from "html2canvas";
import Design1 from "../designs/Design1";
import Design2 from "../designs/Design2";
import Design3 from "../designs/Design3";

import { MdOutlineRefresh, MdOutlineFileDownload } from "react-icons/md";

const DownloadPoster = () => {
  const navigate = useNavigate();
  const { docInfo, tempInfo, setIsLoading } = useContext(AppContext);
  useEffect(() => {
    if (!docInfo || !tempInfo) {
      navigate("/");
    }
  }, [docInfo, tempInfo]);

  const reloadPage = () => {
    window.location.reload();
  };

  const downloadImage = () => {
    setIsLoading(true);
    window.scrollTo(0, 0);
    html2canvas(document.getElementById("fullImg"), {
      allowTaint: true,
      useCORS: true,
      logging: true,
      scrollX: 0,
      scrollY: -window.scrollY,
      onrendered: function (canvas) {
        document.body.appendChild(canvas);
        window.scrollTo(0, 0);
      },
    })
      .then((canvas) => {
        var myImage = canvas.toDataURL("image/jpeg", 1);
        const link = document.createElement("a");
        link.href = myImage;
        link.target = "_blank";
        link.setAttribute("download", "image.jpeg");
        document.body.appendChild(link);
        link.click();
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setIsLoading(false);
        alert("oops, something went wrong!", error);
      });
  };
  return (
    <>
      <div className="celebration fixed top-0 left-0 h-full w-full z-[1]"></div>
      <div className="relative w-full mt-6">
        <div id="fullImg" className="fullImg w-[310px] mx-auto bg-white shadow">
          {tempInfo?.design === "1" && (
            <Design1 docInfo={docInfo} tempInfo={tempInfo} />
          )}
          {tempInfo?.design === "2" && (
            <Design2 docInfo={docInfo} tempInfo={tempInfo} />
          )}
          {tempInfo?.design === "3" && (
            <Design3 docInfo={docInfo} tempInfo={tempInfo} />
          )}
        </div>
      </div>
      <div className="actionBtns">
        <button onClick={reloadPage}>
          <MdOutlineRefresh />
        </button>
        <button onClick={downloadImage}>
          <MdOutlineFileDownload />
        </button>
      </div>
    </>
  );
};
export default DownloadPoster;
