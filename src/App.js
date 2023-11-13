import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import Availablepackages from "./components/Availablepackages";
import Offers from "./components/Offers";
import Destination from "./components/Destination";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Userform from "./components/Userform";
//import { destinations } from "./components/PackagesChild/PackageData";
import PackagesCard from "./components/PackagesChild/PackagesCard";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/availablepackages" element={<Availablepackages />} />
        <Route path="/offers" element={<Offers />} />

        <Route path="/morepackages/:id" element={<PackagesCard />} />
      </Routes>

      <Userform />
      <Footer />
    </>
  );
}

export default App;
