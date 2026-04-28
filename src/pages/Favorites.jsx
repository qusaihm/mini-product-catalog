 import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import { Container, Row, Col, Card ,Button} from "react-bootstrap";

function Favorites() {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);

  return (
    <Container className="mt-4">
      <h2>Favorites</h2>

      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <Row className="g-3">
          {favorites.map((item) => (
            <Col key={item.id} md={3}>
              <Card  >

                <Card.Img src={item.image} style={{ height: "150px", objectFit: "contain" }} />
                <Card.Body>

                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>${item.price}</Card.Text>
                   <Button
                    variant="danger"
                    className="mt-auto"
                    onClick={() => removeFromFavorites(item) } >
                    Remove
                   </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Favorites;