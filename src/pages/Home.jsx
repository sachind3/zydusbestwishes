import { Link } from "react-router-dom";
import BIRTHDAYICON from "./../assets/icon_birthday.png";
import ANNIVERSARY from "./../assets/icon_anniversary.png";
const Home = () => {
  return (
    <div className="h-full flex items-center justify-center flex-col gap-12">
      <div className="text-center font-bold">
        <div className="text-5xl text-theme_blue-500">ZYDUS</div>
        <div className="text-3xl text-theme_pink-500">Wishes for Doctor</div>
        {/* Zyduswishesfordr */}
      </div>
      <div className="font-semibold flex flex-col gap-3 w-full px-8 text-white text-xl">
        <Link
          to="poster/birthday"
          className="flex items-center gap-5 bg-theme_blue-600 px-6 py-3 rounded-2xl"
        >
          <img src={BIRTHDAYICON} className="w-14 h-14" alt="birthday" />
          <div>Birthday Poster</div>
        </Link>
        <Link
          to="poster/anniversary"
          className="flex items-center gap-5 bg-theme_blue-600 px-6 py-3 rounded-2xl"
        >
          <img src={ANNIVERSARY} className="w-14 h-14" alt="anniversary" />
          <div>Anniversary Poster</div>
        </Link>
      </div>
    </div>
  );
};
export default Home;
