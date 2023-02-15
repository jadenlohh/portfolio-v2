import React from 'react'
import resume from '../assets/resume.pdf'
import { Nav } from 'react-bootstrap'

const NavigationBar = () => {
    return (
        <Nav className='navbar justify-content-center pt-3'>
            <Nav.Item>
                <Nav.Link href='/'>Home</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href='/about'>About</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href='/projects'>Projects</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href={resume} target="_blank">Resume&nbsp;&nbsp;<span style={{fontSize: '14px'}}><i className="fa-solid fa-arrow-up-right-from-square"></i></span></Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavigationBar