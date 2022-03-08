import React, { useState } from "react";

const Basic1 = (props: any) => {
  const [products, setProducts] = useState({ name: "", price: "" });
  return (
    <>
      <form>
        <input
          type="text"
          value={products.name}
          onChange={(e) => setProducts({ ...products, name: e.target.value })}
        ></input>
        <input
          type="text"
          value={products.price}
          onChange={(e) => setProducts({ ...products, price: e.target.value })}
        ></input>
      </form>
      <h1>ProductName is {products.name}</h1>
      <h1>ProductPrice is {products.price}</h1>
    </>
  );
};

export default Basic1;
