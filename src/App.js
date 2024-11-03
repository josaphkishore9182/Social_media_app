import React from 'react'
import './App.css'
import Nav from './NavBar/Nav'
import Profile from './Left/Profile'
import Center from './Center/Center'


function App() {
  return (
    <>
    <div className='Main_page'>
      <div className='NavBar'>
        <Nav />
      </div>
      <div className='Center'>
      <Center/>
      </div>
      <div className='Right'>
        <Profile/>
      </div>
    </div>
    </>
  );
}

export default App
