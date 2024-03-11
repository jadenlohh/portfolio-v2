import React from 'react'
import '../styles/home.css'
import { Col, Image, Row } from 'react-bootstrap'
import NavigationBar from '../components/NavigationBar'
import SocialsSidebar from '../components/SocialsSidebar'
import PortraitImg from '../images/portrait.jpg'

const Home = () => {

  return (
    <>
      <NavigationBar />
      <SocialsSidebar />

      <div className='hero mx-auto'>
        <Row style={{ margin: 'auto' }}>
          <Col md='7' className='text-box'>
            <h1>Hey, I'm Jaden</h1>
            <p className='mt-3'>A year 2 student studying Information Technology at Nanyang Polytechnic</p>
          </Col>

          <Col md='5' className='image-box'>
            <Image fluid='true' src={PortraitImg} id="portrait" />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Home