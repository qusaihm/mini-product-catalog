import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";

function ProductCard({ product }) {
  const { addToFavorites } = useContext(FavoritesContext);

  return (
    <Card className="product-card h-100 shadow-sm border-0 hover-shadow">
      <Card.Img
        variant="top"
        src={product.image}
        style={{ height: "150px", objectFit: "contain" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-truncate">{product.title}</Card.Title>
        <Card.Text className="fw-bold text-success">${product.price}</Card.Text>
        <div className="d-flex flex-column gap-2 mt-auto">
          <Button
            as={Link}
            to={`/product/${product.id}`}
            className="mt-auto"
            variant="primary"
          >
            {" "}
            View Details
          </Button>

          <Button
            variant="outline-danger"
            onClick={() => {
              addToFavorites(product);
            }}
          >
            Add to Favorites
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
