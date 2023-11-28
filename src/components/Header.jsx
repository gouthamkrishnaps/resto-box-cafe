import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar className="bg-dark text-light">
        <Container>
          <h3 className='fw-bold'>
            <img
              alt=""
              src="https://i.pinimg.com/originals/be/e5/e5/bee5e51d93c67438a6bc5b6d7f352a56.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            Resto <span className='text-danger'>Box</span>
          </h3>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header