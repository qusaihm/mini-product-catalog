import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
     <Card  className="h-100 d-flex flex-column shadow-sm">
      <Card.Img variant="top" src={product.image} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-truncate">{product.title}</Card.Title>
        <Card.Text className="fw-bold text-success">
          ${product.price}
        </Card.Text>
        <Button as={Link}
          to={`/product/${product.id}`}
         className="mt-auto" variant="primary"> View Details</Button>
      </Card.Body>
    </Card>
    
  );
}

export default ProductCard;

