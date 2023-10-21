import React from "react";
import { products } from "./Products";

function UrunListesi({ urunEkle }) {
  return (
    <div>
      <div className="row">
        {products.map((urun) => (
          <div className="col-md-3 my-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src={urun.img} alt="" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">{urun.name}</h5>
                <p className="card-text">Fiyat {urun.price} ₺</p>
                <button
                  className="btn btn-warning"
                  onClick={() => urunEkle(urun)}
                >
                  Sepete Ekle
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UrunListesi;
