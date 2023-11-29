import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Restcard({restaurent}) {
 
  /* console.log(restaurent.photograph); */

  return (
    <div className='p-2'>
        <Link to={'/restview'} style={{textDecoration:'none'}}>
            <Card className='restcard rounded-5 shadow' style={{ width: '100%' ,backgroundColor:'white'}}>
            <Card.Img className='p-2 rounded-5' width={'100%'} height={'300px'} variant="top" src={restaurent.photograph} />
            <Card.Body className='text-center'>
                <h5  className='' style={{color:'black'}}>{restaurent.name}</h5>
                <Row>
                    <Col>
                    <Card.Text>
                    {restaurent.cuisine_type} 
                    </Card.Text>
                    </Col>
                    <Col>
                    <Card.Text>
                    {restaurent.neighborhood}
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