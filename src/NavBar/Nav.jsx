import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className='Nav'>
        <div className='Nav_logo'>
            <h1>Study</h1>
        </div>
        <div className='Nav_links'>
            <div className='link'>
            <i class="fa-solid fa-house"></i>
            <a href='#home'>Home</a>
            </div>
            <div className='link'>
            <i class="fa-solid fa-magnifying-glass"></i>
            <a href='#home'>Search</a>
            </div>
            <div className='link'>
            <i class="fa-brands fa-facebook-messenger"></i>
            <a href='#home'>Messanger</a>
            </div>
            <div className='link'>
            <i class="fa-solid fa-bell"></i>
            <a href='#home'>Notification</a>
            </div>
            <div className='link'>
            <i class="fa-solid fa-circle-plus"></i>
            <a href='#home'>Create</a>
            </div>
            <div className='link'>
            <i class="fa-solid fa-user" ></i>
            <a href='#home'>Profile</a>
            </div>
            <div className='link_Down'>
            <i class="fa-solid fa-bars"></i>
            <a href='#More'>More</a>
            </div>

        </div>
        <div className='icon'>
            <i class="fa-solid fa-bell"></i>
            <i class="fa-brands fa-facebook-messenger"></i>
        </div>
    </div>
  )
}

export default Nav
