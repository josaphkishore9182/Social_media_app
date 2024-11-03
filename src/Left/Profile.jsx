import React from 'react'
import './Left.css'

function Avatar() {
    
    return (
      <img
        className="avatar"
        src="/images/131544586.jpeg"
        alt="Josaph"
        width={50}
        height={50}
      />
     
    );
  }
  
const Profile = () => {
    const Name = "josaph_kishore";
    
    return (
    <div className='profile'>
      <div className='profile_name'>
      <Avatar/ > <h3>{Name}</h3>
      </div>
      <div className='switch'>
      <a href='#switch'>Switch</a>
      </div>
    </div>
  );
}

export default Profile
