import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../styles/Home.css'
import User from './User';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends Component {

    render() {
        const users = this.props.users
        return (
            <Container>
            <Row></Row>
            <Row className='row-size'>
                <div className='home-font'>WHO'S WATCHING?</div>
            </Row>
            <Row>
                {users.map(user => <Col><User user = {user} key = {user.id}/></Col> )}
            </Row>
            </Container>
        );
    }
}

export default Home;