import React from 'react'
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
                <Nav.Link href='/'>Resume <span style={{fontSize: '13px'}}><i className="fa-solid fa-arrow-right"></i></span></Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavigationBar