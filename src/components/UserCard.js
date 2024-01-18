import { Card,Col } from "react-bootstrap";

const UserCard = (props) => {
    return (
        <Col lg={4} className="mb-3">
        <Card style={{ width: "100%" }}>
       
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.email}
          </Card.Text>
        </Card.Body>
        </Card>
        </Col>
        
    );
}

export default UserCard;