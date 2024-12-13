import React from 'react';

function Discounts() {
  return (
    <div className="container text-center py-4">
      <div className="row">
        <div className="col-md-3">
          <div className="card shadow-sm">
            <img src="https://www.eatingwell.com/thmb/xzR1INWu-qKNgOqwG4cIMERqsMo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eat-the-rainbow-chopped-salad-with-basil-mozzarella-beauty-184-278133-4000x4000-ef8f3f0ad7134d2b860c51f5e7b38ce5.jpg" className="card-img-top" alt="Dish" />
            <div className="card-body">
              <h5 className="card-title">15% Off</h5>
              <h5 className="card-title">Greys Vage</h5>
              <h5 className="card-title">6 Days Remaining</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm">
            <img src="https://www.recipetineats.com/tachyon/2021/08/Garden-Salad_47-SQ.jpg" className="card-img-top" alt="Dish" />
            <div className="card-body">
              <h5 className="card-title">10% Off</h5>
              <h5 className="card-title">Greys Vage</h5>
              <h5 className="card-title">6 Days Remaining</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAesIbR6POzXxRpE_kfcLxl8Y17tVJRB7lug&s" className="card-img-top" alt="Dish" />
            <div className="card-body">
              <h5 className="card-title">25% Off</h5>
              <h5 className="card-title">Greys Vage</h5>
              <h5 className="card-title">6 Days Remaining</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discounts;
