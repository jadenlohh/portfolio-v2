import React from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'
import WeatherProjectImg from '../images/427.png'

const ProjectBanner = () => {
    return (
        <div className='project-banner'>
            <Row>
                <Col md='6' className='pe-0'>
                    <Image fluid='true' src={WeatherProjectImg} width='400' />
                </Col>

                <Col md='6' className='project-description ps-0'>
                    <h2>Weather Forecast</h2>
                    <p className='mb-5'>
                        A weather forecast application that shows the<br />weather in Singapore
                    </p>

                    <a href='https://sgweather.netlify.app'>
                        See it in action&nbsp;&nbsp;<Button variant='primary' className='shadow-none'><i className="fa-solid fa-arrow-right"></i></Button>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default ProjectBanner