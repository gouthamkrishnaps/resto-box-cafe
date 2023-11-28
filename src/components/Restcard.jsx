import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Restcard() {
  return (
    <div>
        <Link to={'/restview'} style={{textDecoration:'none'}}>
            <Card style={{ width: '100%' }}>
            <Card.Img width={'100%'} height={'300px'} variant="top" src="https://www.chicken.ca/wp-content/uploads/2020/09/Big-Juicy-Burgers.jpg" />
            <Card.Body className='text-center'>
                <Card.Title>Card Title</Card.Title>
                <Row>
                    <Col>
                    <Card.Text>
                    Some quick 
                    </Card.Text>
                    </Col>
                    <Col>
                    <Card.Text>
                    Some quick 
                    </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
            </Card>
        </Link>
    </div>
  )
}

export default Restcard