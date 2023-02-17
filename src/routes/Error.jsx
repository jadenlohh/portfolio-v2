import React from 'react'
import NavigationBar from '../components/NavigationBar'
import SocialsSidebar from '../components/SocialsSidebar'
import '../styles/error.css';
import error from '../images/error.svg'

const Error = () => {

  return (
    <>
        <NavigationBar />
        <SocialsSidebar />

        <div className='error text-center'>
            <h1>Page Not Found</h1>
            <p>
                Uhm... We've searched everywhere but we couldn't find what you are looking for 
            </p>

            <a href='/' style={{color: 'grey', textDecoration: 'none'}}>
                <i class="fa-solid fa-arrow-left"></i>&nbsp; Back to home
            </a>    
        </div>

        <img src={error} id='error-img' />
    </>
  )
}

export default Error