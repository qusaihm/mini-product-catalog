
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { Row, Col, Alert,Container,Spinner } from "react-bootstrap";
import ProductCard from "../components/ProductCard";


function Products() {
  const [products, setProducts] = useState([]);
  const [loader , setLoader] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
  const fetchData = async () => {
    try {
       
      const data = await getProducts();
      console.log(data);
      setProducts(data);
    } catch (err) {
      setError("Failed to fetch products ")
      console.log(err);
    }finally{
      setLoader(false);
    }
  };

  fetchData();
}, []);

if(loader){
  return (
  <div className="text-center mt-5">
  <Spinner animation="border" />
  </div>);
}

if (error) {
    return (
      <Alert variant="danger"  >
        {error}
      </Alert>
    );
  }

  return (
    <Container className="mt-4 px-3"> 
    <Row className="g-4"> 
      {products.map((product) => ( 
        <Col key={product.id} xs={12} sm={6} md={4} lg={3} xl={2} className="d-flex"> 
      <ProductCard product={product} /> </Col> ))} 
      </Row> 
      </Container>
  );
 
}

export default Products;