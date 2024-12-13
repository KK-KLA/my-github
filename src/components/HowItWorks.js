import React from 'react';

function HowItWorks() {
  return (
    <div className="bg-light py-5">
    <div className="container text-center">
      <h2>How does it work?</h2>
      <div className="row mt-4">
        <div className="col-md-3">
          <img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" width="150" height="150"alt="Select location" />
          <h5>Select location</h5>
          <p>Choose the location where your food will be delivered.</p>
        </div>
        <div className="col-md-3">
          <img src="https://cdn-icons-png.flaticon.com/512/857/857681.png" width="150" height="150"alt="Choose order" />
          <h5>Choose order</h5>
          <p>Check over hundreds of menus to pick your favorite food.</p>
        </div>
        <div className="col-md-3">
          <img src="https://static-00.iconduck.com/assets.00/money-icon-1024x1024-f6dh1k6o.png" width="150" height="150"alt="Pay advanced" />
          <h5>Pay advanced</h5>
          <p>It's quick, safe, and simple. Select several methods of payment.</p>
        </div>
        <div className="col-md-3">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBo6PL-Q6FYo2ARh6ke0EquUFyM5_pCXCRwQ&s" width="150" height="150" alt="Enjoy meals" />
          <h5>Enjoy meals</h5>
          <p>Food is made and delivered directly to your home.</p>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default HowItWorks;
