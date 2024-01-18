import { Container, Row } from "react-bootstrap";
import UserCard from "./UserCard";

const UserList = (props) => {
    return <Container className="mt-5">
        <Row>

            {props.userData.map((user) =>{
                return <UserCard key={user.id}  {...user}/>
            })}
            
          
        </Row>
    </Container>
}

export default UserList;