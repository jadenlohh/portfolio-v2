import React from 'react'
import '../styles/home.css'
import { Col, Image, Row } from 'react-bootstrap'
import NavigationBar from '../components/NavigationBar'
import SocialsSidebar from '../components/SocialsSidebar'
import ProjectBanner from '../components/ProjectBanner'
import PortraitImg from '../images/portrait.jpg'

const Home = () => {

    return (
        <>
            <NavigationBar />
            <SocialsSidebar />

            {/* <ul className='page-navigations'>
                <li><i className="fa-solid fa-square"></i></li>
                <li onClick={changeSection}><i className="fa-regular fa-square"></i></li>
                <li><i className="fa-regular fa-square"></i></li>
                <li><i className="fa-regular fa-square"></i></li>
            </ul> */}

            <div className='section hero active'>
                <Row style={{margin: 'auto'}}>
                    <Col md='6' className='text-box'>
                        <h1>Hey, I'm Jaden</h1>
                        <p className='mt-3'>A year 2 student studying Information Technology<br />at Nanyang Polytechnic</p>    
                    </Col>

                    <Col md='6' className='image-box'>
                        <Image fluid='true' src={PortraitImg} height='340' width='340' />
                    </Col>
                </Row>
            </div>

            <i className="fa-solid fa-chevron-down" id='arrow-down'></i>

            {/* <div className='home-project-section' id='favourite-projects'>
                <div style={{textAlign: 'center'}}>
                    <h2>My Works</h2>
                    <p>View some of my past projects that I've done</p>
                </div>

                <ProjectBanner />
            </div> */}

            <div className='section' style={{height: '100vh'}}>ee</div>
            <div className='section' style={{height: '100vh'}}>eee</div>
            <div className='section' style={{height: '100vh'}}>eeee</div>
        </>
    )
}

export default Home