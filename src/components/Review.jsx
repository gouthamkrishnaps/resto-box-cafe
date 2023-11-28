import React from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function Review() {
    const [open, setOpen] = useState(false);
  return (
        <>
            <Button onClick={() => setOpen(!open)} variant="outline-warning" size="lg">
                Click to See Reviews
            </Button>
            <Collapse in={open}>
        <div className='my-2'>
            <hr />
            <h5>Name and Date</h5>
            <h5>Rating</h5>
            <p>Description</p>
        </div>
        </Collapse>
    </>
  )
}

export default Review