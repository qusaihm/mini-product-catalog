import { useEffect, useState } from "react";
import { useParams,  Link } from "react-router-dom";
import { Container, Row, Col, Spinner, Alert, Button } from "react-bootstrap";
import { getProductById } from "../services/api";
 

function ProductDetails() {
 const { id } = useParams();
  
 const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(()=>{
  const fetchProduct = async() => {
    try{
      const data = await getProductById(id);
      setProduct(data);
    }catch(err){
      setError("Failed to load product");
    }finally{
     setLoading(false);
    }
  }
  
  fetchProduct();
},[id]);



  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

   if (error) {
  return (
    <Container className="mt-5 text-center">
      <Alert variant="danger">{error}</Alert>

      <Button as={Link} to="/products" variant="secondary">
      back to product
      </Button>
    </Container>
  );

  }

  return (
     <Container className="mt-4">
          
      <Button as={Link} to="/" variant="secondary" className="mb-3"  >
       Back
      </Button>

      <Row>
        <Col md={6} className="text-center">
          <img
            src={product.image}
            alt={product.title}
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
        </Col>

        <Col md={6}>
          <h3>{product.title}</h3>

          <h4 className="text-success">${product.price}</h4>

          <p className="mt-3">{product.description}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetails;


 