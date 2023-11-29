import React from 'react'
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Review from '../components/Review';

function RestView() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <Container>
            <Row className='py-5'>
                <Col lg={3}>
                    <img className='rounded' width={'100%'} height={'385px'} src="https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/burger-recipe-4.jpg" alt="" />
                </Col>
                <Col lg={9}>
                    <hr />
                    <h4 className='text-center fw-bold'><span className='text-warning'>RESTAURANT</span> DETIALS</h4>
                    <hr />
                    <ListGroup >
                        <ListGroup.Item> <h5 className='text-center py-2'>Resto Cafe Kakkanad</h5></ListGroup.Item>
                        <ListGroup.Item>Neighbourhood : ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Cusine type : leo risus</ListGroup.Item>
                        <ListGroup.Item>Address : Lorem ipsum dolor sit, amet consectetur adipisicing elit.</ListGroup.Item>
                        <ListGroup.Item>
                        <div className="mb-2 text-center">
                            <Button className='me-2' onClick={handleShow} variant="warning" size="lg">
                                Operating Hours
                            </Button>
                            <Review/>
                        </div>
                        </ListGroup.Item>
                    </ListGroup>
                    <hr />
                </Col>
            </Row>
        </Container>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title className='text-warning'>Operating Hours</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <ListGroup >
                <ListGroup.Item>Monday : 9am to 9 pm</ListGroup.Item>
                <ListGroup.Item>Tuesday : 9am to 9 pm</ListGroup.Item>
                <ListGroup.Item>Wednesday : 9am to 9 pm</ListGroup.Item>
                <ListGroup.Item>Thursday : 9am to 9 pm</ListGroup.Item>
                <ListGroup.Item>Friday : 9am to 9 pm</ListGroup.Item>
                <ListGroup.Item>Saturday : 9am to 9 pm</ListGroup.Item>
                <ListGroup.Item>Sunday :<span className='text-danger'> Holiday</span></ListGroup.Item>
            </ListGroup>
            </Modal.Body>
           
        </Modal>
    </div>
  )
}

export default RestView