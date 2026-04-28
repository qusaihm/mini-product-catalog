 import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import { Container, Row, Col, Card ,Button} from "react-bootstrap";

function Favorites() {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);

  return (
    <Container className="mt-4">
      <h2>Favorites</h2>

      {favorites.length === 0 ? (
       <div className="text-center py-5">

         <p className="mt-2 mb-0 fw-semibold">No favorites yet</p>
         <p className="text-muted">
          You haven’t added any products to favorites.
         </p>
     </div>
      ) : (
        <Row className="g-3">
          {favorites.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-100 d-flex flex-column shadow-sm border-0" >

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