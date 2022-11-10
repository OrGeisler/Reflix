import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/User.css'
import { BrowserRouter as Router ,Route , Link} from 'react-router-dom'


function User(props) {
  const user = props.user
  return (
    <Card className='user' style={{ width: '18rem', height:'18rem' }}>
      <Card.Img variant="top" src = {user.img} height = "180rem" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button href = {`/catalog/${user.id}`} variant="primary">Select</Button>
      </Card.Body>
    </Card>
  );
}

export default User;