import React from "react";

function Sepet({ cart, urunCikar }) {
  return (
    <div>
      <div className="row">
        {cart.length > 0 ? (
          cart.map((urun) => (
            <div className="col-md-3 my-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src={urun.img} alt="" className="card-img-top img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">{urun.name}</h5>
                  <p className="card-text">Fiyat {urun.price} ₺</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => urunCikar(urun.id)}
                  >
                    Sepetten Çıkar
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div class="alert alert-danger" role="alert">
            SEPET BOŞ :(
          </div>
        )}
      </div>
    </div>
  );
}

export default Sepet;
