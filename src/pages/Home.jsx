import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-5 mb-md-0">
            <h1 className="display-4 fw-bold mb-3">
              Welcome to Mini Product Catalog
            </h1>

            <p className="lead text-muted mb-4">
              Discover amazing products with a modern and simple shopping
              experience.
            </p>
            <Button as={Link} to="/products" variant="dark" size="lg">
              Explore Products
            </Button>
          </Col>

          <Col md={6} className="text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
              alt="Shopping"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
