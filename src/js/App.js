import React from 'react'
import '../scss/App.scss'
import Content from './Content'
import Navbar from './Navbar'

function App() {
  return (
    <div className="page">
      <div className="container">
        <Navbar />
        <Content />
      </div>
    </div>
  )
}

export default App
