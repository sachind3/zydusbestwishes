const Design3 = ({ docInfo, tempInfo }) => {
  return (
    <div className="flex flex-col text-center bg-white">
      <div className="relative">
        <img
          src={docInfo?.photo}
          className="absolute rounded-full w-[148px] bottom-[8px] left-0 right-0 mx-auto"
        />
        <img src={`${tempInfo?.name}/${tempInfo?.path}/top.png`} alt="top" />
      </div>
      <div className="relative">
        <div className="font-bold text-xl absolute  top-[2px] left-0 right-0 mx-auto">
          {docInfo?.fullName}
        </div>
        <img
          src={`${tempInfo?.name}/${tempInfo?.path}/bottom.png`}
          alt="bottom"
        />
      </div>
    </div>
  );
};
export default Design3;
