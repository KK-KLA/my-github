import React from 'react';

function FeaturedRestaurants() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Featured Restaurants</h2>
      <div className="container my-5">
  <div className="row g-4">
    {[...Array(8)].map((_, index) => (
      <div className="col-md-3" key={index}>
        <div className="card shadow-sm">
          <img
            src="https://www.simplyrecipes.com/thmb/KE6iMblr3R2Db6oE8HdyVsFSj2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-1024x682-583b275444104ef189d693a64df625da.jpg"
            className="card-img-top"
            alt="Dish"
          />
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="badge bg-warning text-dark">20% off</span>
              <span className="badge bg-light text-dark">Fast</span>
            </div>
            <h5 className="card-title">Restaurant {index + 1}</h5>
            <p className="card-text text-secondary mb-1">⭐ {40 - index} reviews</p>
            <span
              className={`badge ${
                index % 3 === 0 ? "bg-success" : "bg-secondary"
              }`}
            >
              {index % 3 === 0 ? "Open Now" : "Opens Tomorrow"}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default FeaturedRestaurants;
