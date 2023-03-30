const Design2 = ({ docInfo, tempInfo }) => {
  return (
    <div className="flex flex-col text-center bg-white">
      <div className="relative">
        <img src={`${tempInfo?.name}/${tempInfo?.path}/top.png`} alt="top" />
      </div>
      <div className="relative">
        <img
          src={docInfo?.photo}
          className="absolute w-[180px] top-[3px] left-0 right-0 mx-auto"
        />
        <div className="font-bold text-xl absolute  top-[210px] left-0 right-0 mx-auto z-[3] text-white">
          {docInfo?.fullName}
        </div>
        <img
          src={`${tempInfo?.name}/${tempInfo?.path}/bottom.png`}
          alt="bottom"
          className="relative z-[2]"
        />
      </div>
    </div>
  );
};
export default Design2;
