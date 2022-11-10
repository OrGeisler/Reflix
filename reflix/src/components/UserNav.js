import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/UserNav.css'

function UserNav(props) {

    return (
        <Container>
        <Row className='nav-row'>
            <Col><input className='search' type="text" value={props.testText} onChange = {props.updateSearchText}/></Col>
            <Col><div className='budget'>Budget : {props.user.budget}</div></Col>
        </Row>
        </Container>
    );
}

export default UserNav;