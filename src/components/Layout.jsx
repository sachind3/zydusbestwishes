import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AppContext } from "../context";
import Loader from "./Loader";

const Layout = () => {
  const { isLoading } = useContext(AppContext);
  return (
    <div className="mx-auto max-w-md h-full flex flex-col appContainer">
      {isLoading && <Loader />}
      <Outlet />
    </div>
  );
};
export default Layout;
