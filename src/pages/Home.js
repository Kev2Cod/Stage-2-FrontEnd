import React from "react"; 
import { products } from "../components/DataDummy/Products";

// Component
import HomeComponent from "../components/HomeComponent";

const Home = () => {
  return (
    <>
      <div className="container mb-lg-0 mb-5">
        <h5 className="text-var-red fw-bold mt-4">Product</h5>
        <div className="products d-flex flex-wrap gap-3 mt-4 justify-content-md-start justify-content-center ">

        {products.map((item, index) => {
        return <HomeComponent key={index} id={index} image={item.image} title={item.title} price={item.price} stock={item.stock}/>
        })}
 
        </div>
      </div>
    </>
  );
};

export default Home;
