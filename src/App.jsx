import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Companies from './components/Companies';
import Courses from './components/Courses';
import Achievement from './components/Achievement';
import Category from './components/Category';
import Feedback from './components/Feedback';
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
      <Achievement />
      <Category />
      <Feedback />
    </div>
  )
}

export default App
