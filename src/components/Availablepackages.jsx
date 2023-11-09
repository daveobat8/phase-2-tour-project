import { Routes, Route} from "react";

import Stack from "react-bootstrap/Stack";
import Userform from "./Userform"
import Diani from "./PackagesChild/Diani";
import Malindi from "./PackagesChild/Malindi";
import MaasaiMara from "./PackagesChild/MaasaiMara";
import Nakuru from "./PackagesChild/Nakuru";
import RiftValley from "./PackagesChild/RiftValley";
import Amboseli from "./PackagesChild/Amboseli";

const Availablepackages = () => {
  const  handleBookTicket = <Routes><Route path="/userform" element={<Userform/>}/></Routes>
  return (
    <Stack gap={3} style={{ padding: "20px", backgroundColor: "#efefef" }}>
      <MaasaiMara className="p-2" handleBookTicket={handleBookTicket}/>
      <Diani className="p-2" />
      <Malindi className="p-2" />
      <Nakuru className="p-2" />
      <RiftValley className="p-2" />
      <Amboseli className="p-2" />
    </Stack>
  );
};

export default Availablepackages;