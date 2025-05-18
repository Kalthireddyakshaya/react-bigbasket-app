
 import React from "react";
import "./Home.css";

const Home = () => {
  const featuredRestaurants = [
    {
      name: "Urban Tadka",
      cuisine: "Indian, Hyderabad",
      rating: "4.5",
      img: "/images/urbantadka.jpg",
    },
    {
      name: "Dragon Wok",
      cuisine: "Indian, Bangalore",
      rating: "4.3",
      img: "/images/dragonwok.jpg",
    },
    {
      name: "Kritunga",
      cuisine: "Indian, Nellore",
      rating: "4.6",
      img: "/images/kritunga.jpg",
    },
    {
      name: "Paradise",
      cuisine: "Indian, Hyderabad",
      rating: "4.4",
      img: "/images/paradise.jpg",
    },
  ];

  const categories = [
    { name: "Veg Items", img: "/images/veg1.jpg" },
    { name: "NonVeg Items", img: "/images/nonveg1.jpg" },
    { name: "Chocolates", img: "/images/chocos.jpg" },
    { name: "Dairy", img: "/images/dairy.jpg" },
  ];

  const sampleItems = [
    { name: "Carrots", img: "/images/carrots1.jpg" },
    { name: "Broccoli", img: "/images/broccoli.jpg" },
    { name: "Tomatoes", img: "/images/tomatoes1.jpg" },
    { name: "ChickenGizzards", img: "/images/chickengizzards.jpg" },
   { name: "Chicken Mince", img: "/images/chickenmince.jpg" },
    { name: "DairyMilks", img: "/images/dairymilk1.jpg" },
    { name: "Perks", img: "/images/perk1.jpg" },
     { name: "Luvit Luscious", img: "/images/luvitluscious.jpg" },
     
       
  ];

  return (
    <div className="home-page">
      {/* Welcome Section */}
      <section className="welcome-section">
        <h1>Welcome to BigBasket! </h1>
        <p>Your one-stop shop for groceries, delivered with care.</p>
      </section>

      {/* Popular Categories Section */}
      <section className="categories-section">
        <h1>Popular Categories</h1>
        <div className="category-cards">
          {categories.map((item, index) => (
            <div className="category-card" key={index}>
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Wide Variety of Fresh Groceries</li>
          <li>Timely Delivery to Your Doorstep</li>
          <li>Affordable Pricing & Discounts</li>
          <li>Secure Payment Options</li>
        </ul>
      </section>

      {/* Special Food Items Marquee */}
      <section className="food-items-marquee">
        <h2>Fresh Picks & Favorites</h2>
        <div className="marquee-container">
          <div className="marquee-content">
            {sampleItems.map((item, index) => (
              <div className="marquee-item" key={index}>
                <img src={item.img} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants Section */}
      <section className="restaurants-section">
        <h2>Top Restaurants</h2>
        <div className="restaurant-cards">
          {featuredRestaurants.map((rest, index) => (
            <div className="restaurant-card" key={index}>
              <img src={rest.img} alt={rest.name} />
              <div className="restaurant-info">
                <h3>{rest.name}</h3>
                <p>{rest.cuisine}</p>
                <span>⭐ {rest.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 BigBasket. All rights reserved.</p>
        <p>Your one-stop destination for fresh groceries and delicious food.</p>
      </footer>
    </div>
  );
};

export default Home;
