import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import DoctorInfo from "./pages/DoctorInfo";
import DownloadPoster from "./pages/DownloadPoster";
import Home from "./pages/Home";
import Poster from "./pages/Poster";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="poster/:template" element={<Poster />} />
        <Route path="doctor-information" element={<DoctorInfo />} />
        <Route path="download-poster" element={<DownloadPoster />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
export default App;
