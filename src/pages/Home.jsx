import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Restcard from '../components/Restcard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurent } from '../redux/restSlice'

function Home() {
    const  allRestuarent = useSelector((state)=> state.restSlice.allRestuarent)
    console.log(allRestuarent);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchRestaurent())
    },[])
  return (
    <div >
        <Row className='p-5'>
            <Col className='' md={6} lg={3}>
                <Restcard/>
            </Col>
            <Col className='' md={6} lg={3}>
                <Restcard/>
            </Col>
            <Col className='' md={6} lg={3}>
                <Restcard/>
            </Col>
            <Col className='' md={6} lg={3}>
                <Restcard/>
            </Col>
        </Row>
    </div>
  )
}

export default Home