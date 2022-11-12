import Nav from "react-bootstrap/Nav";
import "../styles/Navigate.css";

function Navigate() {
  return (
    <Nav variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link href="/">
          <div className="nav-text">Home</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/catalog" eventKey="catalog">
          <div className="nav-text">Catalog</div>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigate;
