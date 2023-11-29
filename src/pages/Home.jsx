import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Restcard from '../components/Restcard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurent } from '../redux/restSlice'

function Home() {
    const  allRestaurent = useSelector((state)=>state.restSlice.allRestaurent)
    console.log(allRestaurent);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchRestaurent())
    },[])
  return (
    <div >
        <Row className='p-5'>
        {allRestaurent?.length>0?
            allRestaurent?.map((restaurent)=>(<Col className='' md={6} lg={3}>
            <Restcard restaurent={restaurent}/>
        </Col>)):
        <p className='text-danger fw-bold'>nothing to display</p>
        }
        </Row>
    </div>
  )
}

export default Home