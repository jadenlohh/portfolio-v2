import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import axios from 'axios'
import '../styles/projects.css'
import NavigationBar from '../components/NavigationBar'
import SocialsSidebar from '../components/SocialsSidebar'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get('https://api.github.com/users/jadenlohh/repos').then(response => {
      setProjects(response.data)
    })
  }, [])

  return (
    <>
      <NavigationBar />
      <SocialsSidebar />

      <div className='projects'>
        <h2 className='text-center'><span style={{ color: 'rgb(120, 120, 120)' }}>/</span>projects</h2>
        <p className='text-center'>Projects that I have done in the past</p>

        <Row className='mt-5'>
          {
            projects.map((project, index) => {
              return (
                <ProjectCard key={index} name={project.name} description={project.description} languages_url={project.languages_url} link={project.homepage} github_url={project.html_url} />
              )
            })
          }
        </Row>
      </div>

      <Footer />
    </>
  )
}

export default Projects