import React from 'react'
import './Center.css'
import Home from './Home';

function Avatar() {
    
    return (
      <img
        className="avatar"
        src="/images/131544586.jpeg"
        alt="Lin Lanying"
        width={50}
        height={50}
      />
     
    );
  }
const Center = () => {
  return (
    <div>
      <div className='status_bar'>
       <Avatar/>
       <Avatar/>
       <Avatar/>
       <Avatar/>
       <Avatar/>
       <Avatar/>
       <Avatar/>
       <Avatar/>
       <Avatar/>
       <Avatar/>
       <Avatar/>
       <Avatar/>
       <Avatar/>
      </div>
      <div className='center_content'>
        <Home/>
      </div>
    </div>
  )
}

export default Center
