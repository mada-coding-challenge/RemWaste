// src/App.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import SkeletonCard from "./components/SkeletonCard";
import BottomNavbar from './components/BottomNavbar';

function App() {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSkip, setSelectedSkip] = useState("");

  useEffect(() => {
    axios
      .get("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft")
      .then((res) => {
        console.log(res);
        setSkips(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching skips:", err);
        setLoading(false);
      });
  }, []);

  const handleSelect = (skip) => {
    setSelectedSkip(skip);
  };

  return (
    <div className="min-h-screen  p-10">
      <h1 className="text-3xl font-bold mb-6 text-center p-5 text-[#d9d9d9]">Choose Your skip size</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-5">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          : skips.map((skip) => (
              <Card
                key={skip.id}
                skip={skip}
                isSelected={skip.id === selectedSkip.id}
                onSelect={handleSelect}
              />
              
            ))}
      </div>
 <BottomNavbar selected={selectedSkip} />
    </div>
  );
}

export default App;
