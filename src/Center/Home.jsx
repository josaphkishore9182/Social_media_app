import React from 'react'
import './Center.css'

function Avatar() {
    
    return (
    <>
    <div className='home'>
    <div className='home_profile'>
    <img
        className="avatar"
        src="/images/131544586.jpeg"
        alt="josaph"
        width={50}
        height={50}
      />
      <h3>kishore_john</h3>
    </div>
    <div className='Dots'>
       <a href='#Profile'>...</a>
    </div>
    </div>
    <div className='post'>
    <img
        className="avatar"
        src="/images/img.jpg"
        alt="posts"
      />
    </div>
    <div className='buttons'>
      <button><i class="fa-regular fa-thumbs-up"></i></button>
      <button><i class="fa-regular fa-comment"></i></button>
      <button><i class="fa-regular fa-paper-plane"></i></button>
      <div className='right'>
      <button><i class="fa-regular fa-bookmark"></i></button>
      </div>
    </div>
    </>
    );
  }

const Home = () => {
  return (
    <div className='home_content'>
      <Avatar/>
      <Avatar/>
      <Avatar/>
      <Avatar/>
      <Avatar/>
      <Avatar/>
    </div>
  )
}

export default Home
