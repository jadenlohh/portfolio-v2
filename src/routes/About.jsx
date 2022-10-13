import React from 'react'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'
import SocialsSidebar from '../components/SocialsSidebar'
import '../styles/about.css'

const About = () => {
    return (
        <>
            <NavigationBar />
            <SocialsSidebar />
            
            <div className='about'>
                <h2 className='text-center'><span className='slash'>/</span>about</h2>
                <p className='text-center'>All you want to know about me</p>

                <div style={{marginTop: '4rem'}}>
                    <h4><span className='slash'>/</span>about<span className='slash'>/</span>intro</h4>
                    <p className='mt-4'>
                        Hi there! My name is Jaden, a year 2 student pursuing a Diploma in Information Technology at 
                        Nanyang Polytechnic. I first found out about programming during secondary school when I was browsing 
                        through the courses available in the different polytechnics.<br /><br />

                        I then went on to research on my own and learnt my first programming language on YouTube. However, 
                        not owning a computer at that time means I had to use an <a href='https://replit.com'>online editor</a> to 
                        create my first python game - rock, paper, scissors.<br /><br />

                        <a href='https://replit.com/@Coldfrost' className='replit-link mt-4'>my past replit profile <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </p>
                </div>

                <div style={{marginTop: '12%'}}>
                    <h4><span className='slash'>/</span>about<span className='slash'>/</span>future-plans</h4>
                    <p className='mt-4'>
                        After being exposed to so many challenges and experience, I am more certain about <b>using
                        my skills and knowledge to build tech for public good.</b><br /><br />
                        
                        I currently enjoy doing front-end development - building and creating user-friendly interface using 
                        clean, readable code.
                    </p>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default About