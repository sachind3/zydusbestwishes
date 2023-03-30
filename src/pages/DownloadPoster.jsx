import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context";
import html2canvas from "html2canvas";
import Design1 from "../designs/Design1";
import Design2 from "../designs/Design2";
import Design3 from "../designs/Design3";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

import { BsFileImage, BsFilePdf, BsArrowClockwise } from "react-icons/bs";
import download from "downloadjs";

const DownloadPoster = () => {
  const navigate = useNavigate();
  const { docInfo, tempInfo, setIsLoading } = useContext(AppContext);
  useEffect(() => {
    if (!docInfo || !tempInfo) {
      navigate("/");
    }
  }, [docInfo, tempInfo]);
  let myPdf;
  if (tempInfo) {
    myPdf = `${tempInfo.name}/${tempInfo.path}/${tempInfo.path}.pdf`;
  }

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

  function roundedImage(ctx) {
    ctx.beginPath();
    ctx.arc(512 / 2, 512 / 2, 512 / 2, 0, Math.PI * 2, false);
  }

  function hexshap(ctx) {
    ctx.moveTo(35, 128);
    ctx.lineTo(256, 0);
    ctx.lineTo(477, 128);
    ctx.lineTo(477, 384);
    ctx.lineTo(256, 512);
    ctx.lineTo(35, 384);
    ctx.lineTo(35, 128);
    ctx.strokeStyle = "#40739f";
    ctx.stroke();
  }

  const getPDF = async () => {
    let pdfPhoto = "";
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "";
    img.src = docInfo.photo;
    img.onload = () => {
      canvas.width = 512;
      canvas.height = 512;
      if (tempInfo.design === 2) {
        hexshap(ctx, 0, 0, 512, 512, 512 / 2);
      } else {
        roundedImage(ctx, 0, 0, 512, 512, 512 / 2);
      }
      ctx.clip();
      ctx.drawImage(img, 0, 0, 512, 512);
      pdfPhoto = canvas.toDataURL("image/png");
    };
    const existingPdfBytes = await fetch(myPdf).then((res) =>
      res.arrayBuffer()
    );
    const pngImageBytes = await fetch(pdfPhoto).then((res) =>
      res.arrayBuffer()
    );
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const pngImage = await pdfDoc.embedPng(pngImageBytes);
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    firstPage.drawText(docInfo.fullName, {
      x:
        firstPage.getWidth() / 2 -
        helveticaFont.widthOfTextAtSize(
          docInfo.fullName,
          tempInfo.pdf.name.size
        ) /
          2,
      y: tempInfo.pdf.name.y,
      size: tempInfo.pdf.name.size,
      font: helveticaFont,
      color: tempInfo.design === 2 ? rgb(1, 1, 1) : rgb(0, 0, 0),
    });
    firstPage.drawImage(pngImage, {
      x: tempInfo.pdf.img.x,
      y: tempInfo.pdf.img.y,
      width: tempInfo.pdf.img.width,
      height: tempInfo.pdf.img.height,
    });
    const pdfBytes = await pdfDoc.save();
    download(pdfBytes, `pdf.pdf`, "application/pdf");
  };
  console.log(tempInfo);
  return (
    <>
      <div className="celebration fixed top-0 left-0 h-full w-full z-[1]"></div>
      <div className="relative w-full mt-auto mb-auto">
        <div id="fullImg" className="fullImg w-[310px] mx-auto bg-white shadow">
          {tempInfo?.design === 1 && (
            <Design1 docInfo={docInfo} tempInfo={tempInfo} />
          )}
          {tempInfo?.design === 2 && (
            <Design2 docInfo={docInfo} tempInfo={tempInfo} />
          )}
          {tempInfo?.design === 3 && (
            <Design3 docInfo={docInfo} tempInfo={tempInfo} />
          )}
        </div>
      </div>
      <div className="actionBtns">
        <button onClick={reloadPage}>
          <BsArrowClockwise />
        </button>
        <button onClick={downloadImage}>
          <BsFileImage />
        </button>
        <button onClick={getPDF}>
          <BsFilePdf />
        </button>
      </div>
    </>
  );
};
export default DownloadPoster;
