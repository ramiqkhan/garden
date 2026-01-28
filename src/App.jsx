import { useState } from "react";
import Header from "./components/Navbar";
import Footer from "./components/footer";
import ValentineHero from "./components/1sec";
import GardenCollection from "./components/2sec";
import HowItWorks from "./components/3sec";
import NewArrivals from "./components/4sec";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* FIXED HEADER */}
      <Header />
      <ValentineHero />
      <GardenCollection />
      <HowItWorks/>
      <NewArrivals/>
<Footer />
    
    </>
  );
}

export default App;
