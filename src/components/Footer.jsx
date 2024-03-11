import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='footer'>
      <h4>Jaden Loh</h4>

      <Row>
        <Col md='5'>
          <a href='https://www.linkedin.com/in/jadenlohh/'>linkedin.com/in/jadenlohh</a>
          <a href='https://www.github.com/jadenlohh'>github.com/jadenlohh</a>
          <a href='mailto:jadenlohh@gmail.com'>jadenlohh@gmail.com</a>
        </Col>

        <Col md='4'>
          <a href='/'>Home</a>
          <a href='/about'>About Me</a>
          <a href='/projects'>My Projects</a>
        </Col>
      </Row>
    </div>
  )
}

export default Footer