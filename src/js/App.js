import React from 'react'
import '../css/App.scss'
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
