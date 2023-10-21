import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import UrunListesi from "./UrunListesi";
import Sepet from "./Sepet";
import { useEffect, useState } from "react";

function App() {
  const [sepet, setSepet] = useState([]);

  const urunEkle = (urun) => {
    const yeniSepet = [...sepet, urun];
    setSepet(yeniSepet);
    localStorage.setItem("sepet", JSON.stringify(yeniSepet));
  };

  const sepettenCikar = (id) => {
    const sepettekiler = [...sepet];
    const urunIndex = sepettekiler.findIndex((item) => item.id === id);
    if (urunIndex > -1) {
      sepettekiler.splice(urunIndex, 1);
      setSepet(sepettekiler);
      localStorage.setItem("sepet", JSON.stringify(sepettekiler));
    }
  };

  useEffect(() => {
    const localData = localStorage.getItem("sepet");
    if (localData) {
      setSepet(JSON.parse(localData));
    }
  }, [sepet]);

  return (
    <div className="App">
      <Navbar sepet={sepet} />
      <Routes>
        <Route path="/" element={<UrunListesi urunEkle={urunEkle} />} />
        <Route
          path="/sepet"
          element={<Sepet urunCikar={sepettenCikar} cart={sepet} />}
        />
      </Routes>
    </div>
  );
}

export default App;
