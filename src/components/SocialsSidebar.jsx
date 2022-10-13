import React from 'react'
import { Nav } from 'react-bootstrap'

const SocialsSidebar = () => {
    return (
        <Nav className='socials-sidebar flex-column'>
            <Nav.Link className='icons' href='https://www.linkedin.com/in/jadenlohh/' target='_blank' title='Linkedin'><i className="fa-brands fa-linkedin-in"></i></Nav.Link>
            <Nav.Link className='icons' href='https://www.github.com/jadenlohh' target='_blank' title='Github'><i className="fa-brands fa-github"></i></Nav.Link>
            <Nav.Link className='icons' href='mailto:jadenlohh@gmail.com' title='Email'><i className="fa-regular fa-envelope"></i></Nav.Link>
            <Nav.Link className='icons' href='https://t.me/jadenlohh' target='_blank' title='Telegram'><i className="fa-brands fa-telegram"></i></Nav.Link>
        </Nav>
    )
}

export default SocialsSidebar