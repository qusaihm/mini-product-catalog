
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

function Products() {
  const [products, setProducts] = useState([]);




  useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await getProducts();
      console.log(data);
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  fetchData();
}, []);

  return (
    <div>
      <h1>Products</h1>
      <p> product count : {products.length}</p>
    </div>
  );
 
}

export default Products;